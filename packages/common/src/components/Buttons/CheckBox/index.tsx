import React, { ComponentProps } from "react";
import "./checkbox.scss";

interface Props extends ComponentProps<"input"> {
  content: string;
}

const CheckBox = ({ checked, content, ...props }: Props) => {
  return (
    <div className="checkbox-wrapper">
      <input type="checkbox" id={`checkbox-${content}`} {...props} />
      <label htmlFor={`checkbox-${content}`}>
        <span>{content}</span>
      </label>
    </div>
  );
};

export default CheckBox;
