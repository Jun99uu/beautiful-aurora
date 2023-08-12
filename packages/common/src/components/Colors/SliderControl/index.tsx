import React, { ComponentProps, useState } from "react";
import "./slidercontrol.scss";

interface SliderProps extends ComponentProps<"input"> {
  value?: number;
}

/**
 * 0~100 까지의 슬라이더 컨트롤
 */
const SliderControl = ({ value = 50, ...props }: SliderProps) => {
  const calculateWidth = (value: number) => {
    if (value < 5) return `${(value / 100) * 100 + 1}%`;
    if (value < 15) return `${(value / 100) * 100 + 0.8}%`;
    if (value > 95) return `${(value / 100) * 100 - 3}%`;
    if (value > 90) return `${(value / 100) * 100 - 2}%`;
    if (value > 85) return `${(value / 100) * 100 - 1}%`;
    if (value > 77) return `${(value / 100) * 100 - 0.8}%`;
    return `${(value / 100) * 100}%`;
  };

  return (
    <div className="slider-container">
      <div>
        <span>0</span>
        <span>100</span>
      </div>
      <div className="slider-wrapper">
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          className="slider-input"
          {...props}
        />
        <div
          className="slider-background-left"
          style={{
            width: calculateWidth(value),
            minWidth: "2.5%",
          }}
        />
        <div
          className="slider-background-right"
          style={{
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default SliderControl;
