import React from "react";
import SignUpForm from "./_components/form";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <main className="h-screen w-full">
      <div className="mt-10 p-2 md:w-2/5 text-center mx-auto w-11/12 bg-neutral-300 shadow-md shadow-neutral-600 rounded-md">
        <h2 className="text-xl font-semibold">
          Bem vindo de volta ao Blog do JCDEV
        </h2>
        <h3 className="mt-4 text-sm">
          Faça seu cadastro e começe a utilizar 100% de nossas funcionalidades.
        </h3>

        <SignUpForm />

        <div>
          <p>
            Já possui uma conta?{" "}
            <Link href="/signIn" className="text-blue-600">
              Autentique-se
            </Link>{" "}
            para ter acesso total ao{" "}
            <span className="font-semibold">Blog do JCDEV</span>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
