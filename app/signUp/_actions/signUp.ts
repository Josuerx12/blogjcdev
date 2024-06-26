"use server";

import { db } from "@/providers/db";
import { registerUserSchema } from "@/schemas/auth-schema";
import { hash } from "bcryptjs";

export async function signUpAction(
  prevState: any,
  credentials: FormData
): Promise<any> {
  try {
    const result = registerUserSchema.safeParse({
      name: credentials.get("name"),
      lastName: credentials.get("lastName"),
      email: credentials.get("email"),
      password: credentials.get("password"),
    });

    if (result.error) {
      throw result.error.format();
    }

    const userExists = await db.user.findUnique({
      where: {
        email: result.data.email,
      },
    });

    if (userExists) {
      throw {
        generic:
          "Usuário com e-mail informado já cadastrado no banco de dados!",
      };
    }

    const passHash = await hash(result.data.password, 10);

    await db.user.create({
      data: { ...result.data, password: passHash },
    });
  } catch (error) {
    return error;
  }
}
