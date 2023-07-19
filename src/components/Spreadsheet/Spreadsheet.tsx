import { saveSheet } from "@/app/slices/sheetSlice";
import { AppDispatch, RootState } from "@/app/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { generateCSV } from "../../utils/common";
import AddRow from "./AddRow";
import Header from "./Header";
import Row from "./Row";

const Spreadsheet: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { rowCount, data } = useSelector(
    (state: RootState) => state.sheetReducer
  );

  useEffect(() => {
    if (Object.keys(data).length)
      dispatch(saveSheet({ csvData: generateCSV(data) }));
  }, [data]);

  return (
    <>
      <Header />
      <div className="flex flex-col gap-[4px] mt-[9px]">
        {Array.from({ length: rowCount }).map((_, index) => (
          <Row key={`row-${index}`} rowIndex={index + 1} />
        ))}
        <AddRow />
      </div>
    </>
  );
};

export default Spreadsheet;
