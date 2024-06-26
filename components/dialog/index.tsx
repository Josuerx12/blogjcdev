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
      className={`relative overflow-y-auto duration-300 ease-out ${
        isOpen ? " z-30 opacity-100 " : "-z-20 opacity-0"
      }`}
      aria-labelledby={title}
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={handleClose}
        className="fixed inset-0 backdrop-blur-sm bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>
      <div className="fixed inset-0 mx-auto h-fit md:w-7/12 w-11/12 mt-40 p-2 z-50 bg-white border rounded">
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
