import Button from "@/components/button";
import { Loader, Plus } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

const CreatePostButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button style={{ width: "100%" }} type="submit">
      {pending ? (
        <div className="flex w-full justify-center gap-2">
          <span>Criando</span> <Loader className="animate-spin" />
        </div>
      ) : (
        <div className="flex w-full justify-center gap-2">
          <Plus /> <span>Adicionar Post</span>
        </div>
      )}
    </Button>
  );
};

export default CreatePostButton;
