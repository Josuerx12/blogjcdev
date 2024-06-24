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
      } z-20 justify-center items-center inset-0 bg-black/40 overflow-y-auto w-screen h-screen`}
    >
      <div className="w-9/12 p-2">
        <div className="flex justify-between items-center">
          <h5>{title}</h5>
          <button onClick={handleClose}>
            <X />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
