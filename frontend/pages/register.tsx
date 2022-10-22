import { NextPage } from "next";

import GuestLayout from "components/Layouts/GuestLayout";
import RegisterForm from "components/Auth/RegisterForm";

const RegisterPage: NextPage = () => {
  return (
    <GuestLayout>
      <RegisterForm />
    </GuestLayout>
  );
};

export default RegisterPage;
