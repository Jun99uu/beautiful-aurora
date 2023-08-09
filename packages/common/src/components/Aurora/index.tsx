import React from "react";
import "./aurora.scss";

interface AuroraProps {
  /**
   * 색상 배열, 총 4개까지 선택
   *
   * 기본 값은 "#50c7ec", "#0a6d24c3", "#6658b3eb", "#cb6022ad"
   */
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  /**
   * 래핑하는 박스의 너비 (ex. 100vw, 100 등 단위 없으면 px로 들어감)
   *
   * 기본값 400px
   */
  width?: string | number;
  /**
   * 래핑하는 박스의 높이 (ex. 100vw, 100 등 단위 없으면 px로 들어감)
   *
   * 기본값 400px
   */
  height?: string | number;
  /**
   * 박스 배경 색.
   *
   * 기본값 "#1a7c645a"
   */
  backgroundColor?: string;
}

/**
 * 오로라 미리보기 컴포넌트
 */
const AuroraComponent = ({
  firstColor = "#50c7ec",
  secondColor = "#0a6d24c3",
  thirdColor = "#6658b3eb",
  fourthColor = "#cb6022ad",
  width = 400,
  height = 400,
  backgroundColor = "#1a7c645a",
}: AuroraProps) => {
  const colors = [firstColor, secondColor, thirdColor, fourthColor];
  const radialStyle = (color: string) => {
    return {
      background: `radial-gradient(circle, ${color}, transparent, transparent)`,
    };
  };

  return (
    <div className="aurora-wrapper" style={{ width, height, backgroundColor }}>
      {/* <div className="aurora-wrapper" /> */}
      {colors.map((color, idx) => (
        <div className={`circle circle-${idx}`} style={radialStyle(color)} />
      ))}
    </div>
  );
};

export default AuroraComponent;
