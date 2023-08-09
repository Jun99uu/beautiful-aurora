import React, { ComponentProps } from "react";
import "./textinput.scss";

/**
 * 너비 높이 값을 입력받는 인풋 창
 */
const TextInput = ({ value, ...props }: ComponentProps<"input">) => {
  return (
    <div className={`custom-input-wrapper ${value !== "" ? "checked" : ""}`}>
      <input
        value={value}
        className={`custom-input ${value !== "" ? "checked" : ""}`}
        {...props}
      />
    </div>
  );
};

export default TextInput;
