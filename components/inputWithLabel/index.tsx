"use client";
import React, { ComponentProps } from "react";
import Input from "../input";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

const InputWithLabel = (props: InputProps) => {
  return (
    <label
      className="flex flex-col gap-2 w-full text-start outline-none"
      htmlFor={props.name}
    >
      <span className="text-sm font-bold">{props.label}</span>
      <Input {...props} />
    </label>
  );
};

export default InputWithLabel;
