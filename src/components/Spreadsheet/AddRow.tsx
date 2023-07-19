import { addRow } from "@/app/slices/sheetSlice";
import { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";

const AddRow = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(addRow());
  };

  return (
    <button
      className="w-full h-[32px] flex items-center justify-center bg-light text-sm hover:bg-opacity-90"
      onClick={handleClick}
    >
      + Add more
    </button>
  );
};

export default AddRow;
