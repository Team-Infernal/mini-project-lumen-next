import { ReactNode } from "react";

import Loader from "components/Loader";

import useAuth from "hooks/useAuth";

const AuthorLayout = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth({
    middleware: ["auth", "role:author", "role:admin"],
  });

  if (!user) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen p-24 flex flex-col justify-between animate-fade-in-up items-center">
      <main>{children}</main>
    </div>
  );
};

export default AuthorLayout;
