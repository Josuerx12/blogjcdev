import { IPost } from "@/interfaces/post";
import React from "react";
import Image from "next/image";

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <div
      className="bg-neutral-200 max-w-lg w-full shadow shadow-black rounded-md p-2"
      key={post.id}
    >
      <h3 className="text-center text-2xl font-bold my-3">{post.title}</h3>
      <Image
        src={post.image}
        className="w-full aspect-auto object-contain"
        width={1920}
        height={1080}
        alt={`Imagem do post: ${post.title}`}
      />
      <p>
        <span className="font-semibold">Messagem: </span>
        {post.body}
      </p>
      <p>
        <span className="font-semibold">Tags: </span>{" "}
        {post.tagList.flatMap((tag, i) => (
          <span key={i}>
            <b> #</b>
            {tag.trim()}
          </span>
        ))}
      </p>

      <form></form>

      <div>
        <h6>Comentarios</h6>
        <div></div>
      </div>
    </div>
  );
};

export default PostCard;
