import { NextPage } from "next";

import GuestLayout from "components/Layouts/GuestLayout";
import LoginForm from "components/Auth/LoginForm";

const LoginPage: NextPage = () => {
  return (
    <GuestLayout>
      <LoginForm />
    </GuestLayout>
  );
};

export default LoginPage;
