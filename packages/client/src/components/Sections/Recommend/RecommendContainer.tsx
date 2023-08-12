import { Recommend } from "@aurora/common";
import { auroraColors } from "@assets/colors";
import { useState } from "react";
import { useAtom } from "jotai";
import { colorState } from "@/store/colorAtom";

const RecommendContainer = () => {
  const [viewColorList, setViewColorList] = useState(auroraColors.slice(0, 4));
  const [_, setColors] = useAtom(colorState);
  const [isSelected, setIsSelected] = useState(-1);

  const handleSelectChange = (idx: number) => {
    setIsSelected(idx);
    setColors(viewColorList[idx]);
  };

  return (
    <div className="recommend-box">
      {viewColorList.map((color, idx) => (
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
