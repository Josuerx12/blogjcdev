"use client";
import InputWithLabel from "@/components/inputWithLabel";
import React from "react";
import SignInButton from "../signInButton";
import { useFormState } from "react-dom";
import { handleSignIn } from "../../_actions/handleSignIn";

type SignActionError = {
  email?: { _errors: string[] };
  password?: { _errors: string[] };
  generic?: string;
};

const SignInForm = () => {
  const [err, formAction] = useFormState<SignActionError | null, FormData>(
    handleSignIn,
    null
  );

  return (
    <form
      method="POST"
      action={formAction}
      className="flex flex-col gap-4 my-4"
    >
      <InputWithLabel
        label="E-mail"
        type="email"
        name="email"
        placeholder="johndoe@gmail.com"
      />
      {err?.email && (
        <p className="text-red-600 font-semibold">
          {err.email._errors.flatMap((err) => err)}
        </p>
      )}
      <InputWithLabel
        type="password"
        label="Senha"
        name="password"
        placeholder="******"
      />
      {err?.password && (
        <p className="text-red-600 font-semibold">
          {err.password._errors.flatMap((err) => err)}
        </p>
      )}
      {err?.generic && (
        <p className="w-full p-2 bg-red-950 text-red-500">{err.generic}</p>
      )}
      <SignInButton />
    </form>
  );
};

export default SignInForm;
