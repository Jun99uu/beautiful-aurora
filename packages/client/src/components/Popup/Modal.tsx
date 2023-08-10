import { Button, CheckBox } from "@aurora/common";
import Portal from "./Portal";
import "./modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useCallback, useRef, useState } from "react";
import { useOutsideClose } from "../hooks/useOutsideClose";
import { useGenerator } from "@/hook/useGenerator";
import complete from "@assets/complete.png";

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
  const [stage, setStage] = useState("select");
  const { copy } = useGenerator();

  const ref = useRef<HTMLDivElement>(null);
  useOutsideClose(ref, handleClose);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>, idx: number) => {
    if (e.target.checked) setSelectIdx(idx);
  };

  const copyToClipboard = () => {
    if (selectIdx !== -1 && stage === "select") {
      copy(selectIdx);
      setStage("complete");
    }
    if (stage === "complete") {
      handleClose();
    }
  };

  const StageComponent = useCallback(() => {
    switch (stage) {
      case "select":
        return list.map((item, idx) => (
          <CheckBox
            content={item}
            checked={idx === selectIdx}
            onChange={(e) => handleSelect(e, idx)}
          />
        ));
      case "complete":
        return (
          <div className="complete-box">
            <img src={complete} alt="complete" />
            <span>Copied to Clipboard!</span>
          </div>
        );
    }
  }, [stage, selectIdx, list]);

  return (
    <Portal wrapperId="modal-wrapper">
      <div className="modal-background">
        <div className="modal-wrapper" ref={ref}>
          <FontAwesomeIcon icon={faXmark} className="x" onClick={handleClose} />
          <StageComponent />
          <Button
            size="large"
            style={{ marginTop: "30px" }}
            onClick={copyToClipboard}
          >
            <span>
              {stage === "select" ? "click to copy" : "close this modal"}
            </span>
          </Button>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
