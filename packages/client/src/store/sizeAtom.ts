import { atom } from "jotai";

export type Size = {
  width: string;
  height: string;
};

export const sizeState = atom<Size>({ width: "", height: "" });
