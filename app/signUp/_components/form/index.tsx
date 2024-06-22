import InputWithLabel from "@/components/inputWithLabel";
import React from "react";
import SignUpButton from "../signUpButton";
import { handleSignUp } from "../../_actions/handleSignUp";

const SignUpForm = () => {
  return (
    <form
      method="POST"
      action={handleSignUp}
      className="flex flex-col gap-4 my-4"
    >
      <InputWithLabel
        label="Nome"
        type="text"
        required
        name="name"
        placeholder="John"
      />
      <InputWithLabel
        label="Sobrenome"
        type="text"
        required
        name="lastName"
        placeholder="Doe"
      />
      <InputWithLabel
        label="E-mail"
        type="email"
        required
        name="email"
        placeholder="johndoe@gmail.com"
      />
      <InputWithLabel
        type="password"
        label="Senha"
        required
        name="password"
        placeholder="******"
      />
      <SignUpButton />
    </form>
  );
};

export default SignUpForm;
