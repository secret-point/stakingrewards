import { SEARCH_INPUT_PLACEHOLDER } from "@/constants/common";
import React from "react";

interface IProps {
  className: string;
}

export const SearchInput: React.FC<IProps> = ({ className }) => {
  const _className = `${className} bg-primary rounded-[5px] h-[29px] outline-none p-[7px] placeholder:text-lg flex flex-col justify-center items-center`;
  return (
    <input className={_className} placeholder={SEARCH_INPUT_PLACEHOLDER} />
  );
};
