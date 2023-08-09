import { atom } from "jotai";

type Size = {
  width: string;
  height: string;
};

/**
 * 현재 View모드(0)인지, Check모드(1)인지
 */
export const sizeState = atom<Size>({ width: "", height: "" });
