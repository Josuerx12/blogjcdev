"use client";
import Button from "@/components/button";
import { Unplug } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const DisconnectButton = () => {
  return (
    <Button title="Desconectar desta conta." onClick={() => signOut()}>
      <div className="flex gap-4 items-center justify-center">
        <Unplug /> Desconectar
      </div>
    </Button>
  );
};

export default DisconnectButton;
