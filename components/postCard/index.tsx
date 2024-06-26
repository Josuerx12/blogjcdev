import { IPost } from "@/interfaces/post";
import React from "react";
import Image from "next/image";

const PostCard = ({ post }: { post: IPost }) => {
  return (
    <div
      className="bg-neutral-200 shadow shadow-black rounded-md p-2"
      key={post.id}
    >
      <h3 className="text-center text-2xl font-bold my-3">{post.title}</h3>
      <Image
        src={post.image}
        className="w-full h-[400px] object-contain"
        width={100}
        height={100}
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
    </div>
  );
};

export default PostCard;
