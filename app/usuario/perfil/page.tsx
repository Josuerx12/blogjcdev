import { auth } from "@/auth";
import Button from "@/components/button";
import { db } from "@/providers/db";
import {
  MessageSquare,
  Pen,
  PenSquare,
  Rss,
  ThumbsUp,
  Trash,
  Unplug,
} from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import TopProfileButtons from "./_components/topProfileButtons";
import DisconnectButton from "./_components/disconnectButton";

const UserProfile = async () => {
  const session = await auth();

  const user = await db.user.findUnique({
    where: {
      id: session?.user.id,
    },
    select: {
      Comments: true,
      createdAt: true,
      email: true,
      id: true,
      lastName: true,
      Likes: true,
      name: true,
      Posts: true,
      role: true,
      updatedAt: true,
    },
  });

  return (
    <main>
      <h2 className="text-center font-bold text-2xl mt-4">Perfil do Usuário</h2>

      <div className="w-fit flex gap-2 shadow-md border-t-2 border-black shadow-neutral-900 sm:mx-auto flex-wrap justify-center mx-2 p-4 rounded-md">
        <Image
          className="border border-black"
          width={200}
          height={200}
          src={"/not-found-user.webp"}
          alt="teste"
        />
        <div className="flex flex-col gap-4">
          <TopProfileButtons />
          <p>
            <span className="font-bold">Nome:</span> {user?.name}
          </p>
          <p>
            <span className="font-bold">Sobrenome:</span> {user?.lastName}
          </p>
          <p>
            <span className="font-bold">E-mail:</span> {user?.email}
          </p>

          <div className="flex gap-4">
            <div
              title="Posts criados."
              className="flex flex-row gap-2 cursor-default"
            >
              <Rss />
              <p>{user?.Posts.length}</p>
            </div>
            <div
              title="Likes dados."
              className="flex flex-row gap-2 cursor-default"
            >
              <ThumbsUp />
              <p>{user?.Likes.length}</p>
            </div>
            <div
              title="Comentarios feitos."
              className="flex flex-row gap-2 cursor-default"
            >
              <MessageSquare />
              <p>{user?.Comments.length}</p>
            </div>
          </div>
          <DisconnectButton />
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
