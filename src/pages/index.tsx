import { Typography } from "@/components/Typography";
import { HEADING } from "@/constants/common";
import { SearchInput } from "@/components/SearchInput";
import { Spreadsheet } from "@/components/Spreadsheet";

export default function Home() {
  return (
    <div className="w-[615px] m-auto pt-[34px]">
      <Typography text={HEADING} className="text-xl pb-[4px]" />
      <SearchInput className="w-full mb-[14px]" />
      <Spreadsheet />
    </div>
  );
}
