export type Color = {
  color: string[];
  bg: string;
  transperant: number;
};

export const auroraColors: Color[] = [
  {
    color: ["#A6C0FE", "#BCAEDC", "#DA96AE", "#F68084"],
    bg: "#E4B5E0",
    transperant: 80,
  },
  {
    color: ["#A6C0FE", "#789BF0", "#78DAF0", "#A6AAFE"],
    bg: "#628EFF",
    transperant: 80,
  },
  {
    color: ["#DA96AE", "#FF8888", "#DE3B74", "#F66335"],
    bg: "#FFBAD3",
    transperant: 80,
  },
  {
    color: ["#BCAEDC", "#9071D8", "#FF7EEA", "#D63CEF"],
    bg: "#8355E3",
    transperant: 80,
  },
  {
    color: ["#F68084", "#FF5C5C", "#FFA439", "#FF6996"],
    bg: "#D5ABFF",
    transperant: 80,
  },
];
