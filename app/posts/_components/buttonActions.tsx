"use client";
import Button from "@/components/button";
import { Filter, Plus } from "lucide-react";
import React, { useState } from "react";
import CreatePostModal from "./createPostModal";
import { useSession } from "next-auth/react";

const ButtonActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useSession();
  return (
    <>
      <CreatePostModal
        handleClose={() => setIsOpen((prev) => !prev)}
        isOpen={isOpen}
      />
      <div className="flex justify-end mt-10 gap-2">
        <Button variant="primary">
          <div className="flex gap-2 items-center">
            <Filter size={20} /> <span>Filtrar Posts</span>
          </div>
        </Button>
        <Button
          title={
            !!data
              ? "Clique aqui para criar um novo post"
              : "Para criar um novo post, autentique-se"
          }
          disabled={!!!data}
          onClick={() => setIsOpen((prev) => !prev)}
          variant="secondary"
        >
          <div className="flex gap-2 items-center">
            <Plus size={20} /> <span>Criar Novo Post</span>
          </div>
        </Button>
      </div>
    </>
  );
};

export default ButtonActions;
