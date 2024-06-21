"use client";
import Button from "@/components/button";
import { Loader } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

const SignUpButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <div className="flex w-full justify-center gap-2">
          <span>Cadastrando</span> <Loader className="animate-spin" />
        </div>
      ) : (
        <>Cadastrar</>
      )}
    </Button>
  );
};

export default SignUpButton;
