import { Button, CheckBox } from "@aurora/common";
import Portal from "./Portal";
import "./modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useRef, useState } from "react";
import { useOutsideClose } from "../hooks/useOutsideClose";
import { useGenerator } from "@/hook/useGenerator";

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
  const [selectIdx, setSelectIdx] = useState(-1);
  const { copy } = useGenerator();

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClose(ref, handleClose);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    if (e.target.checked) setSelectIdx(idx);
  };

  const copyToClipboard = () => {
    if (selectIdx !== -1) {
      copy(selectIdx);
      handleClose();
    }
  };

  return (
    <Portal wrapperId="modal-wrapper">
      <div className="modal-background">
        <div className="modal-wrapper" ref={ref}>
          <FontAwesomeIcon icon={faXmark} className="x" onClick={handleClose} />
          {list.map((item, idx) => (
            <CheckBox
              content={item}
              checked={idx === selectIdx}
              onChange={(e) => handleSelect(e, idx)}
            />
          ))}
          <Button
            size="large"
            style={{ marginTop: "30px" }}
            onClick={copyToClipboard}
          >
            <span>click to copy</span>
          </Button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
