"use server";

import { signIn } from "@/libs/auth";

export async function handleSignIn(form: FormData) {
  try {
    await signIn("credentials", { form, redirect: true, redirectTo: "/" });
  } catch (error: any) {
    console.log(error);
  }
}
