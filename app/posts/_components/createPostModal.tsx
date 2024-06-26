"use client";
import Dialog from "@/components/dialog";
import InputWithLabel from "@/components/inputWithLabel";
import React from "react";
import { useFormState } from "react-dom";
import CreatePostButton from "./createPostButton";
import { createPostAction } from "../_actions/createPost";
import toast from "react-hot-toast";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

type ActionErrors = {
  generic?: string;
  title?: { _errors: string[] };
  body?: { _errors: string[] };
  tagList?: { _errors: string[] };
  success?: boolean;
};

const CreatePostModal = ({ handleClose, isOpen }: Props) => {
  const [err, formAction] = useFormState<ActionErrors | null, FormData>(
    createPostAction,
    null
  );

  if (err?.success) {
    toast.success("Post criado com sucesso!");
    handleClose();
  }

  return (
    <Dialog title="Novo Post" handleClose={handleClose} isOpen={isOpen}>
      <h3 className="text-center font-bold text-xl mt-4">
        Preencha os campos para adicionar novo post ao Blog JC DEV
      </h3>

      <form className="flex flex-col gap-4" action={formAction} method="POST">
        <InputWithLabel label="Titulo" name="title" />
        {err?.title && (
          <p className="text-red-600 font-semibold">
            {err.title._errors.flatMap((err) => err)}
          </p>
        )}
        <InputWithLabel label="Corpo" name="body" />
        {err?.body && (
          <p className="text-red-600 font-semibold">
            {err.body._errors.flatMap((err) => err)}
          </p>
        )}
        <InputWithLabel label="Tags" type="text" name="tags" />
        {err?.tagList && (
          <p className="text-red-600 font-semibold">
            {err.tagList._errors.flatMap((err) => err)}
          </p>
        )}
        <InputWithLabel
          label="Imagens"
          type="file"
          accept="image/png, image/gif, image/jpeg"
        />

        <CreatePostButton />
      </form>
    </Dialog>
  );
};

export default CreatePostModal;
