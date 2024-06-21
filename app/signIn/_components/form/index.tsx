"use client";
import InputWithLabel from "@/components/inputWithLabel";
import React, { FormEvent, useState } from "react";
import SignInButton from "../signInButton";
import { handleSignIn } from "../../_actions/handleSignIn";
import toast from "react-hot-toast";

const SignInForm = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [payload, setPayload] = useState<{
    isLoading: boolean;
    error: null | string;
  }>({
    isLoading: false,
    error: null,
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPayload((prev) => ({ ...prev, isLoading: true }));

    const res = await handleSignIn(credentials);
    if (res.error) {
      toast.error(res.message);
    } else {
      toast.success(res.message);
    }

    setPayload((prev) => ({ ...prev, isLoading: false, error: res.error }));
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-4">
      <InputWithLabel
        label="E-mail"
        type="email"
        onChange={(e) =>
          setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
        required
        name="email"
        placeholder="johndoe@gmail.com"
      />
      <InputWithLabel
        type="password"
        label="Senha"
        onChange={(e) =>
          setCredentials((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
          }))
        }
        required
        name="password"
        placeholder="******"
      />
      {payload?.error && (
        <p className="text-sm bg-red-800 p-2 w-fit mx-auto rounded-md text-white">
          <b className="font-bold">Error:</b> {payload.error}
        </p>
      )}
      <SignInButton pending={payload.isLoading} />
    </form>
  );
};

export default SignInForm;
