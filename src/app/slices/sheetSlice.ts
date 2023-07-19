import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFetchParams, IUpdateDataPayload } from "@/types/common";
import { instance } from "@/utils/axiosConfig";
import { AxiosError, AxiosResponse } from "axios";

export interface sheetState {
  data: Record<string, string>;
  rowCount: number;
  colCount: number;
  isEditing: boolean;
}

const initialState: sheetState = {
  data: {},
  rowCount: 3,
  colCount: 3,
  isEditing: false,
};

interface IResponse {
  status: string;
  id?: string;
  done_at?: string;
}

export const saveSheet = createAsyncThunk<
  AxiosResponse<IResponse>,
  IFetchParams,
  { rejectValue: string }
>("sheet/saveSheet", async ({ csvData }, { rejectWithValue }) => {
  try {
    const res = await instance.post<IResponse>("/save", { data: csvData });
    console.log("RESPONSE", res);
    return res;
  } catch (error: any) {
    return rejectWithValue("An error occured while saving data.");
  }
});

export const sheetSlice = createSlice({
  name: "sheetSlice",
  initialState,
  reducers: {
    toggleIsEditing: (state, action: PayloadAction<boolean>) => {
      state.isEditing = action.payload;
    },
    updateData: (state, action: PayloadAction<IUpdateDataPayload>) => {
      const { newValue, key } = action.payload;
      state.data[key] = newValue;
    },
    addRow: (state) => {
      state.rowCount += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsEditing, updateData, addRow } = sheetSlice.actions;

export default sheetSlice.reducer;
