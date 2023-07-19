import { Parser as FormulaParser } from "hot-formula-parser";
import currency from "currency.js";
import { SPREADSHEET_HEADERS } from "@/constants/common";

export const calculateKey = (rowIndex: number, colIndex: number): string => {
  return String.fromCharCode(64 + rowIndex) + colIndex;
};

export const calculateFormula = (
  data: Record<string, string>,
  formula: string
) => {
  if (formula[0] !== "=") return formula;
  const parser = new FormulaParser();

  parser.setVariable("cell", data);
  const newFormula = Object.keys(data).reduce(
    (prev, curr) =>
      data[curr][0] !== "="
        ? prev.replaceAll(
            curr,
            data[curr][0] === "$"
              ? String(currency(data[curr]).value)
              : data[curr]
          )
        : prev,
    formula
  );
  const { result, error } = parser.parse(newFormula.slice(1));
  return error ? "INVALID" : result;
};

export const generateCSV = (data: Record<string, string>) => {
  const keys = Object.keys(data).sort((left, right) =>
    left.slice(-1).localeCompare(right.slice(-1))
  );

  const [result] = keys.reduce(
    (prev: string[], curr: string) => {
      const [res, prevVal] = prev;
      return prevVal[0] !== curr.slice(-1)
        ? [`${res}\n${data[curr]}`, curr]
        : [`${res},${data[curr]}`, curr];
    },
    [SPREADSHEET_HEADERS.join(","), ""]
  );
  return result;
};
