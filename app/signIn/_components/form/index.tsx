"use client";
import InputWithLabel from "@/components/inputWithLabel";
import React, { useState } from "react";
import SignInButton from "../signInButton";
import { handleSignIn } from "../../_actions/handleSignIn";

const SignInForm = () => {
  return (
    <form action={handleSignIn} className="flex flex-col gap-4 my-4">
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
      <SignInButton />
    </form>
  );
};

export default SignInForm;
