"use server";
import { auth } from "@/auth";
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
    const session = await auth();

    if (!session) {
      throw {
        generic: "Nenhum usuário conectado, não é possivel criar um novo post!",
      };
    }

    const result = newPostSchema.safeParse({
      title: form.get("title"),
      body: form.get("body"),
      tagList: form.get("tags"),
    });

    if (result.error) {
      throw result.error.format();
    }

    const tags = result.data.tagList.trim().split(",");

    await db.post.create({
      data: {
        ...result.data,
        tagList: tags,
        image: "https://i.imgur.com/t2m6dmF.jpeg",
        UserId: session.user.id,
      },
    });

    revalidatePath("/posts");

    return { success: true };
  } catch (error: any) {
    return error;
  }
}
