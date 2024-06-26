"use client";

import { X } from "lucide-react";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  isOpen: boolean;
  handleClose: () => void;
};

const Dialog = ({ children, title, isOpen, handleClose }: Props) => {
  return (
    <div
      className={`fixed ${
        isOpen ? "flex" : "hidden"
      } z-10 justify-center items-start inset-0 bg-black/80 overflow-y-auto w-screen h-screen`}
    >
      <div className="md:w-7/12 w-11/12 mt-40 p-2 z-50 bg-white border rounded">
        <div className="flex justify-between items-center border-b border-neutral-400 pb-2">
          <h5 className="text-2xl font-bold">{title}</h5>
          <button title="Fechar Modal" onClick={handleClose}>
            <X />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
