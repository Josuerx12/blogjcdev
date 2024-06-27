import { db } from "@/providers/db";
import React from "react";
import ButtonActions from "./_components/buttonActions";
import PostCard from "@/components/postCard";

const Posts = async () => {
  const posts = await db.post.findMany();

  return (
    <section className="w-10/12 mx-auto">
      <ButtonActions />
      <div className="flex flex-col gap-6 my-5">
        {posts.length > 0 ? (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="w-full text-center mt-4">
            Nenhum post cadastrado ainda!
          </p>
        )}
      </div>
    </section>
  );
};

export default Posts;
