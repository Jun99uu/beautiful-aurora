import { Button, CheckBox } from "@aurora/common";
import Portal from "./Portal";
import "./modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useOutsideClose } from "../hooks/useOutsideClose";

interface Props {
  handleClose: () => void;
}

const Modal = ({ handleClose }: Props) => {
  const list = [
    "HTML & CSS",
    "React & SCSS",
    "React & emotion (styled)",
    "React & emotion (css)",
  ];
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClose(ref, handleClose);

  return (
    <Portal wrapperId="modal-wrapper">
      <div className="modal-background">
        <div className="modal-wrapper" ref={ref}>
          <FontAwesomeIcon icon={faXmark} className="x" onClick={handleClose} />
          {list.map((item) => (
            <CheckBox content={item} />
          ))}
          <Button size="large" style={{ marginTop: "30px" }}>
            <span>click to copy</span>
          </Button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
