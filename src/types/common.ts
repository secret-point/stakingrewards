export interface IPosition {
  pX: number;
  pY: number;
}

export interface IUpdateDataPayload {
  newValue: string;
  key: string;
}

export interface IFetchParams {
  csvData: string;
}
