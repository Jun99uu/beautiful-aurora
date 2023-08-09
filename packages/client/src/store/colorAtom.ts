import { atom } from "jotai";
import { auroraColors, Color } from "@/assets/colors";

export const colorState = atom<Color>(auroraColors[0]);
