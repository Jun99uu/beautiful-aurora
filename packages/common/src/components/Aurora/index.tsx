import React from "react";
import "./aurora.scss";

interface AuroraProps {
  colors?: string[];
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
}

const AuroraComponent = ({
  colors = ["#50c7ec", "#0a6d24c3", "#6658b3eb", "#cb6022ad"],
  width = 400,
  height = 400,
  backgroundColor = "#1a7c645a",
}: AuroraProps) => {
  const radialStyle = (color: string) => {
    return {
      background: `radial-gradient(circle, ${color}, transparent, transparent)`,
    };
  };

  return (
    <div className="aurora-wrapper" style={{ width, height, backgroundColor }}>
      {colors.map((color, idx) => (
        <div className={`circle circle-${idx}`} style={radialStyle(color)} />
      ))}
      <div className="aurora-wrapper" />
    </div>
  );
};

export default AuroraComponent;
