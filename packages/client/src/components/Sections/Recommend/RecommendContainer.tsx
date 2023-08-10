import { Recommend } from "@aurora/common";
import { auroraColors } from "@assets/colors";
import { useState } from "react";
import { useAtom } from "jotai";
import { colorState } from "@/store/colorAtom";

const RecommendContainer = () => {
  const newArr = auroraColors.slice(0, 4);
  const [_, setColors] = useAtom(colorState);
  const [isSelected, setIsSelected] = useState(-1);

  const handleSelectChange = (idx: number) => {
    setIsSelected(idx);
    setColors(newArr[idx]);
  };

  return (
    <div className="recommend-box">
      {newArr.map((color, idx) => (
        <Recommend
          isSelected={idx === isSelected}
          firstColor={color.color[0]}
          secondColor={color.color[0]}
          thirdColor={color.color[0]}
          fourthColor={color.color[0]}
          backgroundColor={color.bg}
          onClick={() => handleSelectChange(idx)}
        />
      ))}
    </div>
  );
};

export default RecommendContainer;
