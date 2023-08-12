import { atom } from "jotai";
import { auroraColors, Color } from "@/assets/colors";

export const recommendState = atom<Color[]>(auroraColors.slice(0, 4));
