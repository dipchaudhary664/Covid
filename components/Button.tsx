import React from "react";
import Image from "next/image";
type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
};

const Button = ({ type, title, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-full border py-2 px-6 ${variant}`}
      type={type}
    >
      <label className="font-normal whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
