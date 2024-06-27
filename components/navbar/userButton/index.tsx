"use client";
import Button from "@/components/button";
import { ArrowBigDownIcon, Rss, User2 } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const UserButton = () => {
  const { data } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex gap-2 items-center"
      >
        {data?.user.name}
        <Image
          className="rounded-full"
          width={20}
          height={20}
          src="/not-found-user.webp"
          alt="profile pic"
        />
        <ArrowBigDownIcon
          className={`duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          size={18}
        />
      </button>

      <div
        className={`${
          isOpen ? "w-fit  z-40 opacity-100" : " -z-10 opacity-0"
        } duration-300 absolute flex flex-col gap-y-4 top-10 right-0 text-neutral-950 shadow p-2 rounded-md shadow-neutral-900 bg-neutral-200`}
      >
        <h3 className="text-center font-bold">Detalhes</h3>
        <Link
          className="flex justify-between gap-4 text-nowrap"
          href={"/profile"}
        >
          Perfil do Usuário <User2 />
        </Link>
        <Link
          className="flex justify-between gap-4 text-nowrap"
          href={`/${data?.user.id}/posts`}
        >
          Meus Posts <Rss />
        </Link>
        <hr className="border-b border-black" />
        <Button variant="danger" style={{ width: "100%" }}>
          Sair
        </Button>
      </div>
    </div>
  );
};

export default UserButton;
