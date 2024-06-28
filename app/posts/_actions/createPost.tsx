"use server";
import { auth } from "@/auth";
import { db } from "@/providers/db";
import { newPostSchema } from "@/schemas/posts-schema";
import { s3Client } from "@/services/s3";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";
import toast from "react-hot-toast";

import { v4 } from "uuid";

type ActionErrors = {
  generic?: string;
  title?: { _errors: string[] };
  body?: { _errors: string[] };
  tagList?: { _errors: string[] };
  message?: string;
  success?: boolean;
};

async function uploadImage(
  file: Buffer,
  key: string,
  contentType: string
): Promise<String> {
  try {
    const params = new PutObjectCommand({
      Bucket: "posts-jcdev",
      Key: key,
      Body: file,
      ACL: "public-read",
      ContentType: contentType,
    });

    await s3Client.send(params);

    return key;
  } catch (error) {
    throw error;
  }
}

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

    const tags = result.data.tagList.split(",").map((tag) => tag.trim());

    const image = form.get("images") as File;

    const imageBuffer = Buffer.from(await image.arrayBuffer());

    const keyOfFile = await uploadImage(imageBuffer, v4(), image.type);

    await db.post.create({
      data: {
        ...result.data,
        tagList: tags,
        image: `https://posts-jcdev.s3.us-east-2.amazonaws.com/${keyOfFile}`,
        imageKey: keyOfFile as string,
        UserId: session.user.id,
      },
    });

    revalidatePath("/posts");
    return { success: true };
  } catch (error: any) {
    return error;
  }
}
