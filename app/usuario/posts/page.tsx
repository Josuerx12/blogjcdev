import { auth } from "@/auth";
import PostCard from "@/components/postCard";
import { db } from "@/providers/db";
import React from "react";

const UserPosts = async () => {
  const session = await auth();

  if (!session) {
    throw new Error(
      "Nenhum usuário conectado, não é possivel acessar a pagina de posts do usuário!"
    );
  }

  const userPosts = await db.post.findMany({
    where: {
      UserId: session.user.id,
    },
  });
  return (
    <main>
      <h2>Meus Posts</h2>

      <div>
        {userPosts.length > 0 ? (
          userPosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p>Nenhum post registrado para este usuário!</p>
        )}
      </div>
    </main>
  );
};

export default UserPosts;
