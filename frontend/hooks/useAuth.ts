import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

import axios from "lib/axios";

type UseAuthParams = {
  middleware?: Array<string>;
  redirectIfAuthenticated?: string;
};

const useAuth = ({
  middleware = [],
  redirectIfAuthenticated,
}: UseAuthParams) => {
  const router = useRouter();

  const {
    data: user,
    error,
    mutate,
  } = useSWR<User>("/api/user", () =>
    axios
      .get("/api/user")
      .then((response) => response.data)
      .catch((error) => {
        if (error.response.status !== 409) throw error;
        router.push("/verify-email");
      })
  );

  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const register = async ({ setErrors, ...props }: any) => {
    await csrf();

    setErrors([]);

    axios
      .post("/register", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const login = async ({ setErrors, setStatus, ...props }: any) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/login", props)
      .then(() => mutate())
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const forgotPassword = async ({ setErrors, setStatus, email }: any) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/forgot-password", { email })
      .then((response) => setStatus(response.data.status))
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const resetPassword = async ({ setErrors, setStatus, ...props }: any) => {
    await csrf();

    setErrors([]);
    setStatus(null);

    axios
      .post("/reset-password", { token: router.query.token, ...props })
      .then((response) =>
        router.push(
          `/login?reset=${Buffer.from(response.data.status).toString("base64")}`
        )
      )
      .catch((error) => {
        if (error.response.status !== 422) throw error;
        setErrors(error.response.data.errors);
      });
  };

  const resendEmailVerification = ({ setStatus }: any) => {
    axios
      .post("/email/verification-notification")
      .then((response) => setStatus(response.data.status));
  };

  const logout = async () => {
    if (!error) {
      await axios.post("/logout").then(() => mutate());
    }

    window.location.pathname = "/";
  };

  const requiresRoles = (roles: Array<string>) => {
    if (!!user && !roles.includes(user.role)) {
      router.push("/");
    }
  };

  useEffect(() => {
    if (middleware.includes("guest") && redirectIfAuthenticated && user) {
      router.push(redirectIfAuthenticated);
    }
    if (
      window.location.pathname === "/verify-email" &&
      user?.email_verified_at
    ) {
      router.push(redirectIfAuthenticated as string);
    }
    if (middleware.includes("auth") && error) {
      logout();
    }
    if (middleware.some((v) => v.startsWith("role:"))) {
      const roles = middleware
        .filter((v) => v.startsWith("role:"))
        .map((v) => v.replace("role:", ""));
      requiresRoles(roles);
    }
  }, [user, error]);

  return {
    user,
    register,
    login,
    forgotPassword,
    resetPassword,
    resendEmailVerification,
    logout,
    requiresRoles,
  };
};

export default useAuth;
