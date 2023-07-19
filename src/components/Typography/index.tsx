import React from "react";
import montserrat from "../../utils/motserrat";

interface IProps {
  text: string;
  className?: string;
}

export const Typography: React.FC<IProps> = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};
