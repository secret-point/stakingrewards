import React, { useState } from "react";
import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsEditing, updateData } from "@/app/slices/sheetSlice";
import { calculateFormula, calculateKey } from "../../utils/common";
import currency from "currency.js";
import Image from "next/image";

interface IProps {
  rowIndex: number;
  colIndex: number;
}

const Cell: React.FC<IProps> = ({ rowIndex, colIndex }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.sheetReducer);
  const [isCellEditing, setIsCellEditing] = useState<boolean>(false);
  const [cellValue, setCellValue] = useState<string>(
    data[calculateKey(colIndex, rowIndex)] || ""
  );
  const cellClassName =
    "pt-[10px] pb-[9px] bg-light text-sm relative w-[205px] h-[32px] p-[4px] flex items-center justify-center outline-none text-center";

  const handleDoubleClick = () => {
    dispatch(toggleIsEditing(true));
    setIsCellEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCellValue(e.currentTarget.value);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    updateCell(e.currentTarget.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateCell(e.currentTarget.value);
    }
  };

  const updateCell = (newValue: string) => {
    setIsCellEditing(false);
    setCellValue(
      newValue[0] === "$"
        ? String(`$${currency(newValue).value}`)
        : newValue[0] === "=" && newValue.length === 1
        ? ""
        : newValue
    );
    dispatch(toggleIsEditing(false));
    dispatch(updateData({ key: calculateKey(colIndex, rowIndex), newValue }));
  };

  return isCellEditing ? (
    <input
      className={cellClassName}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={cellValue}
      autoFocus
    />
  ) : (
    <span
      className={`${cellClassName} relative`}
      onDoubleClick={handleDoubleClick}
    >
      {calculateFormula(data, cellValue)}
      <Image
        src="/pen-icon.svg"
        className="absolute bottom-[5px] right-[5px]"
        width={9}
        height={9}
        alt="edit"
      />
    </span>
  );
};

export default Cell;
