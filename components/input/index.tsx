import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

const Input = (props: InputProps) => {
  return (
    <input
      {...props}
      className="border-2 border-black bg-neutral-100 focus:shadow-md focus:bg-neutral-300 p-1"
    />
  );
};

export default Input;
