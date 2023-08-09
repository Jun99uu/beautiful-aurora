import { ComponentProps } from "react";
import "./wrapper.scss";

interface Props extends ComponentProps<"div"> {
  title: string;
  children: React.ReactNode;
}

const Wrapper = ({ title, children, ...props }: Props) => {
  return (
    <div className="contents-wrapper" {...props}>
      <span className="contents-title">{title}</span>
      {children}
    </div>
  );
};

export default Wrapper;
