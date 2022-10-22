import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { useRef, useState } from "react";

import InputError from "components/InputError";

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
        <Link href="/">
          <a className="link link-hover text-sm w-fit mb-2 inline-flex gap-2 items-center">
            <FontAwesomeIcon icon={faAngleLeft} className="text-primary" />
            Retour à la liste d'articles
          </a>
        </Link>

        <label className="label">
          <span className="label-text">Adresse email</span>
        </label>
        <input
          type={"email"}
          placeholder="john.smith@teaminfernal.fr"
          ref={emailRef}
          className="input input-bordered bg-base-300 text-neutral-content"
        />
        <InputError errors={errors.email} />

        <label className="label">
          <span className="label-text">Mot de passe</span>
        </label>
        <input
          type={"password"}
          placeholder="********"
          ref={passwordRef}
          className="input input-bordered bg-base-300 text-neutral-content"
        />
        <InputError errors={errors.password} />
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
        <Link href="/register">
          <a className="link link-hover">
            Pas encore de compte ? Inscrivez-vous
          </a>
        </Link>
        <button type={"submit"} className="btn btn-primary flex-grow">
          Se connecter
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
