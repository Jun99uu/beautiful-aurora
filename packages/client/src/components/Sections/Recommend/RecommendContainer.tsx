import { Recommend } from "@aurora/common";
import { auroraColors } from "@assets/colors";

const RecommendContainer = () => {
  const newArr = auroraColors.slice(0, 4);

  return (
    <div className="recommend-box">
      {newArr.map((color) => (
        <Recommend
          firstColor={color.color[0]}
          secondColor={color.color[0]}
          thirdColor={color.color[0]}
          fourthColor={color.color[0]}
          backgroundColor={color.bg}
        />
      ))}
    </div>
  );
};

export default RecommendContainer;
