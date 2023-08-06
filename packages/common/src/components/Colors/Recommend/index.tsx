import React from "react";
import "./recommend.scss";

interface Props {
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  backgroundColor?: string;
}

const Recommend = ({
  firstColor = "#50c7ec",
  secondColor = "#0a6d24c3",
  thirdColor = "#6658b3eb",
  fourthColor = "#cb6022ad",
  backgroundColor = "#1a7c645a",
}: Props) => {
  const colors = [firstColor, secondColor, thirdColor, fourthColor];

  return (
    <div className="custom-picker-wrapper">
      {colors.map((color) => (
        <div
          className="custom-picker-color"
          style={{ backgroundColor: color }}
        />
      ))}
      <span className="custom-picker-vertical" />
      <div className="custom-picker-color" style={{ backgroundColor }} />
    </div>
  );
};

export default Recommend;
