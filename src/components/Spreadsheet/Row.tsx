import { RootState } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";
import Cell from "./Cell";

interface IProps {
  rowIndex: number;
}

const Row: React.FC<IProps> = ({ rowIndex }) => {
  const { colCount } = useSelector((state: RootState) => state.sheetReducer);

  return (
    <div className="flex flex-row  bg-light divide-x-[1px] hover:shadow-[rgba(0,_0,_0,_0.24)_0px_0px_3px_2px] transition-all duration-[100] rounded-[4px]">
      {Array.from({ length: colCount }).map((_, index) => (
        <Cell key={`col-${index}`} rowIndex={rowIndex} colIndex={index + 1} />
      ))}
    </div>
  );
};

export default Row;
