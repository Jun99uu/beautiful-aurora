import { atom } from "jotai";

type Size = {
  width: string;
  height: string;
};

export const sizeState = atom<Size>({ width: "", height: "" });
