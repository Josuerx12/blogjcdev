import { auth } from "@/auth";
import { db } from "@/providers/db";
import Image from "next/image";
import React from "react";

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

      <div className="w-10/12 flex gap-2 border-2 mx-auto p-2 rounded-md">
        <Image
          width={200}
          height={200}
          src={"/not-found-user.webp"}
          alt="teste"
        />
        <div>
          <p>
            <span className="font-bold">Nome:</span> {user?.name}
          </p>
          <p>
            <span className="font-bold">Sobrenome:</span> {user?.lastName}
          </p>
          <p>
            <span className="font-bold">E-mail:</span> {user?.email}
          </p>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
