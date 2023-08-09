import { Button, TextInput } from "@aurora/common";
import "./sizeHeader.scss";
import { useAtom } from "jotai";
import { sizeState } from "../store/sizeAtom";
import { ChangeEvent } from "react";
import { Clipboard } from "@/assets/svgIcon";

const SizeHeader = () => {
  const [sizes, setSizes] = useAtom(sizeState);

  const extractNumbers = (input: string): string => {
    const result = input.match(/\d+/g);
    if (!result) return "";

    let numberStr = result.join("");
    numberStr = parseInt(numberStr, 10).toString();
    const numberVal = parseInt(numberStr, 10);

    if (numberVal > 10000) {
      return "10000";
    }

    return numberStr;
  };

  const handleSettingSize = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "width":
        setSizes((prev) => {
          return {
            ...prev,
            width: extractNumbers(e.target.value),
          };
        });
        break;
      case "height":
        setSizes((prev) => {
          return {
            ...prev,
            height: extractNumbers(e.target.value),
          };
        });
        break;
    }
  };

  return (
    <div className="size-header-wrapper">
      <ul>
        <li className="caption">size</li>
        <li>
          <TextInput
            placeholder="width"
            name="width"
            value={sizes.width}
            onChange={handleSettingSize}
          />
        </li>
        <li className="multiple">x</li>
        <li>
          <TextInput
            placeholder="height"
            name="height"
            value={sizes.height}
            onChange={handleSettingSize}
          />
        </li>
        <li className="unit">px</li>
      </ul>
      <Button size="small" style={{ gap: "15px" }}>
        <Clipboard />
        <span>Export Code</span>
      </Button>
    </div>
  );
};

export default SizeHeader;
