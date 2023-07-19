import { RootState } from "@/app/store";
import { ALPHABETZ, SPREADSHEET_HEADERS } from "@/constants/common";
import React from "react";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  const { isEditing } = useSelector((state: RootState) => state.sheetReducer);

  return (
    <div className="rounded-[4px] bg-primary">
      {SPREADSHEET_HEADERS.map((header, index) => (
        <button
          key={header}
          className="w-[205px] text-sm pt-[9px] pb-[10px] font-[500]"
        >
          {!!isEditing ? ALPHABETZ[index + 1].toUpperCase() : header}
        </button>
      ))}
    </div>
  );
};

export default Header;
