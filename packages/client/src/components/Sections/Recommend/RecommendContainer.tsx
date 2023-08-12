import { Recommend } from "@aurora/common";
import { useState } from "react";
import { useAtom } from "jotai";
import { colorState } from "@/store/colorAtom";
import { useColor } from "@/hook/useColor";

const RecommendContainer = () => {
  const { recommendColors } = useColor();
  const [_, setColors] = useAtom(colorState);
  const [isSelected, setIsSelected] = useState(-1);

  const handleSelectChange = (idx: number) => {
    setIsSelected(idx);
    setColors(recommendColors[idx]);
  };

  return (
    <div className="recommend-box">
      {recommendColors.map((color, idx) => (
        <Recommend
          isSelected={idx === isSelected}
          firstColor={color.color[0]}
          secondColor={color.color[1]}
          thirdColor={color.color[2]}
          fourthColor={color.color[3]}
          backgroundColor={color.bg}
          onClick={() => handleSelectChange(idx)}
        />
      ))}
    </div>
  );
};

export default RecommendContainer;
