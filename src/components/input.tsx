import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="text-md w-full rounded-md border-[1px] border-base-border bg-base-input px-4 py-3 outline-none placeholder:text-base-label focus:border-blue"
    />
  );
}
