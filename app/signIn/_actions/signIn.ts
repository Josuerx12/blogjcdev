"use server";

import { signIn } from "@/auth";
import { db } from "@/providers/db";
import { signInUserSchema } from "@/schemas/auth-schema";
import { compare } from "bcryptjs";

export async function signInAction(
  prevState: any,
  form: FormData
): Promise<any> {
  try {
    const result = signInUserSchema.safeParse({
      email: form.get("email"),
      password: form.get("password"),
    });

    if (result.error) {
      throw result.error.format();
    }

    const userFromDB = await db.user.findUnique({
      where: {
        email: result.data?.email,
      },
    });

    if (!userFromDB) {
      throw { generic: "Credenciais invalidas!" };
    }

    const verifiedUser = await compare(
      result.data.password,
      userFromDB.password
    );

    if (!verifiedUser) {
      throw { generic: "Credenciais invalidas!" };
    }

    await signIn("credentials", {
      email: result.data.email,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    return error;
  }
}
