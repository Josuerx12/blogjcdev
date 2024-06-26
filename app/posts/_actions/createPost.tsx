"use server";
import { signIn } from "@/auth";
import { db } from "@/providers/db";
import { newPostSchema } from "@/schemas/posts-schema";
import { revalidatePath } from "next/cache";

type ActionErrors = {
  generic?: string;
  title?: { _errors: string[] };
  body?: { _errors: string[] };
  tagList?: { _errors: string[] };
  message?: string;
  success?: boolean;
};

export async function createPostAction(
  prev: null | ActionErrors,
  form: FormData
): Promise<ActionErrors | null> {
  try {
    const result = newPostSchema.safeParse({
      title: form.get("title"),
      body: form.get("body"),

      tagList: form.get("tags"),
    });

    if (result.error) {
      throw result.error.format();
    }

    const tags = result.data.tagList.trim().split(",");

    await db.posts.create({
      data: {
        ...result.data,
        tagList: tags,
        image: "https://i.imgur.com/t2m6dmF.jpeg",
      },
    });

    revalidatePath("/posts");

    return { success: true };
  } catch (error: any) {
    return error;
  }
}
