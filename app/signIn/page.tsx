import Link from "next/link";
import React from "react";
import SignInForm from "./_components/form";

const SignInPage = () => {
  return (
    <main className="h-screen w-full">
      <div className="mt-10 p-2 md:w-2/5 text-center mx-auto w-11/12 bg-neutral-300 shadow-md shadow-neutral-600 rounded-md">
        <h2 className="text-xl font-semibold">
          Bem vindo de volta ao Blog do JCDEV
        </h2>
        <h3 className="mt-4 text-sm">
          Autentique-se para obter acesso a mais funcionalidades
        </h3>

        <SignInForm />

        <div>
          <p>
            Ainda não possui uma conta?{" "}
            <Link href="/signUp" className="text-blue-600">
              Cadastre-se
            </Link>{" "}
            para ter acesso total ao{" "}
            <span className="font-semibold">Blog do JCDEV</span>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
