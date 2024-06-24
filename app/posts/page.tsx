import Button from "@/components/button";
import { db } from "@/providers/db";
import { Filter, Plus } from "lucide-react";
import React from "react";

const Posts = async () => {
  const posts = await db.posts.findMany();

  return (
    <section className="w-10/12 mx-auto">
      <div className="flex justify-end mt-10 gap-2">
        <Button variant="primary">
          <div className="flex gap-2 items-center">
            <Filter size={20} /> <span>Filtrar</span>
          </div>
        </Button>
        <Button variant="secondary">
          <div className="flex gap-2 items-center">
            <Plus size={20} /> <span>Criar</span>
          </div>
        </Button>
      </div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p className="w-full text-center mt-4">Nenhum post cadastrado ainda!</p>
      )}
    </section>
  );
};

export default Posts;
