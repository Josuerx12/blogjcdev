"use client";
import Button from "@/components/button";
import { PenSquare, Trash } from "lucide-react";
import React from "react";

const TopProfileButtons = () => {
  return (
    <div className="flex gap-4">
      <Button title="Alterar credenciais desse usuário." variant="primary">
        <div className="flex items-center gap-2">
          <PenSquare /> Alterar Credenciais
        </div>
      </Button>
      <Button title="Deletar sua conta de usuário." variant="danger">
        <div className="flex items-center gap-2">
          <Trash /> Excluir Usuário
        </div>
      </Button>
    </div>
  );
};

export default TopProfileButtons;
