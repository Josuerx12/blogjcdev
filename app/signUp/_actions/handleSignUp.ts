"use server";

import { db } from "@/providers/db";
import { registerUserSchema } from "@/schemas/auth-schema";

export async function handleSignUp(credentials: FormData) {
  try {
    const result = registerUserSchema.safeParse(credentials);

    if (result.error) {
      throw result.error.format();
    }

    if (result.success) {
      await db.user.create({
        data: result.data,
      });
    }
  } catch (error) {
    console.log("Errors: " + JSON.stringify(error));
  }
}
