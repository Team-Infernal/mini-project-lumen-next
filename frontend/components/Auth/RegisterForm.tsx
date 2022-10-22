import Link from "next/link";
import React, { useRef, useState } from "react";

import Back from "components/Back";
import Input from "components/Elements/Input";

import useAuth from "hooks/useAuth";

const RegisterForm = () => {
  const { register } = useAuth({
    middleware: ["guest"],
    redirectIfAuthenticated: "/",
  });

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmationRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<any>([]);

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();

    register({
      first_name: firstNameRef.current?.value,
      last_name: lastNameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      password_confirmation: passwordConfirmationRef.current?.value,
      setErrors,
    });
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="px-24 py-4 w-[54rem] flex flex-col gap-8"
    >
      <div className="form-control">
        <Back />

        <div className="flex justify-between gap-8">
          <div className="flex-grow w-0">
            <Input
              label="Prénom"
              type="text"
              placeholder="Prénom"
              ref={firstNameRef}
              bordered
              className="w-full"
              errors={errors.first_name}
            />
          </div>

          <div className="flex-grow w-0">
            <Input
              label="Nom"
              type="text"
              placeholder="Nom"
              ref={lastNameRef}
              bordered
              className="w-full"
              errors={errors.last_name}
            />
          </div>
        </div>

        <Input
          label="Adresse email"
          type="email"
          placeholder="john.smith@teaminfernal.fr"
          ref={emailRef}
          bordered
          errors={errors.email}
        />

        <Input
          label="Mot de passe"
          type="password"
          placeholder="********"
          ref={passwordRef}
          bordered
          errors={errors.password}
        />

        <Input
          label="Confirmer votre mot de passe"
          type="password"
          placeholder="********"
          ref={passwordConfirmationRef}
          bordered
          errors={errors.password_confirmation}
        />
      </div>
      <div className="flex justify-between items-center gap-8">
        <Link href="/login">
          <a className="link link-hover">Déjà un compte ? Connectez-vous</a>
        </Link>
        <button type={"submit"} className="btn btn-primary flex-grow">
          S'inscrire
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
