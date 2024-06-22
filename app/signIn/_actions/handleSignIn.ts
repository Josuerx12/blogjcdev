"use server";

import { signIn } from "@/auth";
import { db } from "@/providers/db";
import { compare } from "bcrypt";

export async function handleSignIn(credentials: {
  email: string;
  password: string;
}) {
  try {
    if (!credentials || !credentials.email || !credentials.password) {
      throw new Error("Todos os dados de login devem ser preenchidos");
    }

    const userFromDB = await db.user.findUnique({
      where: {
        email: credentials.email as string,
      },
    });

    if (!userFromDB) {
      throw new Error("Credenciais invalidas!");
    }

    const verifiedUser = await compare(
      credentials.password as string,
      userFromDB.password
    );

    if (!verifiedUser) {
      throw new Error("Credenciais invalidas!");
    }

    const formData = new FormData();
    formData.append("email", credentials.email);
    formData.append("password", credentials.password);

    await signIn("credentials", { formData, redirect: false });

    return { message: "Login realizado com sucesso!", error: null };
  } catch (error: any) {
    return { message: "Falha ao realizar autenticação", error: error.message };
  }
}
