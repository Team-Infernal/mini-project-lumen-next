import React, { useRef, useState } from "react";

import Input from "components/Elements/Input";
import Anchor from "components/Elements/Anchor";
import Button from "components/Elements/Button";
import Back from "components/Back";

import useAuth from "hooks/useAuth";

const LoginForm = () => {
  const { login } = useAuth({
    middleware: ["guest"],
    redirectIfAuthenticated: "/",
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const shouldRememberRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<any>([]);
  const [status, setStatus] = useState<any>(null);

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();

    login({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      remember: !!shouldRememberRef.current?.checked,
      setErrors,
      setStatus,
    });
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      className="px-24 py-4 w-[54rem] flex flex-col gap-8"
    >
      <div className="form-control">
        <Back />
        <Input
          label="Adresse email"
          bordered
          errors={errors.email}
          placeholder="john.smith@teaminfernal.fr"
          ref={emailRef}
        />
        <Input
          type="password"
          label="Mot de passe"
          bordered
          errors={errors.password}
          placeholder="********"
          ref={passwordRef}
        />
      </div>
      <div className="flex gap-4 items-center">
        <input
          type="checkbox"
          ref={shouldRememberRef}
          className="toggle toggle-secondary"
        />
        <span>Se rappeler de moi</span>
      </div>
      <div className="flex justify-between items-center gap-8">
        <Anchor href="/register" className="link link-hover">
          Pas encore de compte ? Inscrivez-vous
        </Anchor>
        <Button type="submit" className="btn-primary flex-grow">
          Se connecter
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
