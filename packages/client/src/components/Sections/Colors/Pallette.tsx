import { colorState } from "@/store/colorAtom";
import { SliderControl } from "@aurora/common";
import { useAtom } from "jotai";
import "./colors.scss";
import { ChromePicker } from "react-color";
import { useRef, useState } from "react";
import { useOutsideClose } from "@/components/hooks/useOutsideClose";
import { cloneDeep } from "lodash";
import { useColor } from "@/hook/useColor";

const Pallette = () => {
  const [colors, setColors] = useAtom(colorState);
  const [openIdx, setOpenIdx] = useState(-1);
  const ref = useRef(null);

  const { autoRecommendColors } = useColor();

  const openPallette = (idx: number) => {
    setOpenIdx(idx);
  };
  const closePallette = () => {
    setOpenIdx(-1);
  };

  useOutsideClose(ref, closePallette);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10);
    setColors((prev) => {
      return {
        ...prev,
        transperant: newValue,
      };
    });
  };

  const handleColorByIndex = (hex: string, idx: number) => {
    if (idx >= 0 && idx < colors.color.length) {
      let newColors = cloneDeep(colors.color);
      newColors[idx] = hex;
      setColors((prev) => {
        return {
          ...prev,
          color: newColors,
        };
      });
      autoRecommendColors(idx, hex);
    }
  };

  const handleColorBg = (hex: string) => {
    setColors((prev) => {
      return {
        ...prev,
        bg: hex,
      };
    });
  };

  return (
    <>
      <div className="item-container">
        <div className="item-wrapper">
          <span className="caption">Main color</span>
          <span className="caption">Background</span>
        </div>
        <div className="color-wrapper">
          {colors.color.map((co, idx) => (
            <div
              onClick={() => openPallette(idx)}
              className="color-ball"
              style={{ backgroundColor: co }}
            >
              {openIdx === idx && (
                <span ref={ref} className="color-picker">
                  <ChromePicker
                    color={co}
                    onChange={(color) => handleColorByIndex(color.hex, idx)}
                  />
                </span>
              )}
            </div>
          ))}
          <span className="vertical" />
          <div
            onClick={() => openPallette(4)}
            className="color-ball"
            style={{ backgroundColor: colors.bg }}
          >
            {openIdx === 4 && (
              <span ref={ref} className="color-picker">
                <ChromePicker
                  color={colors.bg}
                  onChange={(color) => handleColorBg(color.hex)}
                />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="item-container">
        <div className="item-wrapper">
          <span className="caption">Transparency</span>
        </div>
        <div className="item-wrapper">
          <SliderControl
            value={colors.transparent}
            onChange={handleSliderChange}
          />
        </div>
      </div>
    </>
  );
};

export default Pallette;
