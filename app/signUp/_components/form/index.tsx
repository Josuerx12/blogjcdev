"use client";
import InputWithLabel from "@/components/inputWithLabel";
import React, { useActionState } from "react";
import SignUpButton from "../signUpButton";
import { useFormState } from "react-dom";
import { signUpAction } from "../../_actions/signUp";

type SignUpErrors = {
  name?: { _errors: string[] };
  lastName?: { _errors: string[] };
  email?: { _errors: string[] };
  generic?: string;
  password?: { _errors: string[] };
};

const SignUpForm = () => {
  const [err, formAction] = useFormState<SignUpErrors | null, FormData>(
    signUpAction,
    null
  );
  return (
    <form action={formAction} className="flex flex-col gap-4 my-4">
      <InputWithLabel label="Nome" type="text" name="name" placeholder="John" />
      {err?.name && (
        <p className="text-red-600 font-semibold">
          {err.name._errors.flatMap((err) => err)}
        </p>
      )}
      <InputWithLabel
        label="Sobrenome"
        type="text"
        name="lastName"
        placeholder="Doe"
      />
      {err?.lastName && (
        <p className="text-red-600 font-semibold">
          {err.lastName._errors.flatMap((err) => err)}
        </p>
      )}
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
        required
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
      <SignUpButton />
    </form>
  );
};

export default SignUpForm;
