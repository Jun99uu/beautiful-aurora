import { colorState } from "@/store/colorAtom";
import { SliderControl } from "@aurora/common";
import { useAtom } from "jotai";
import "./colors.scss";

const Pallette = () => {
  const [colors, setColors] = useAtom(colorState);

  return (
    <>
      <div className="item-container">
        <div className="item-wrapper">
          <span className="caption">Main color</span>
          <span className="caption">Background</span>
        </div>
        <div className="color-wrapper">
          {colors.color.map((co) => (
            <div className="color-ball" style={{ backgroundColor: co }} />
          ))}
          <span className="vertical" />
          <div className="color-ball" style={{ backgroundColor: colors.bg }} />
        </div>
      </div>
      <div className="item-container">
        <div className="item-wrapper">
          <span className="caption">Transparency</span>
        </div>
        <div className="item-wrapper">
          <SliderControl value={colors.transperant} />
        </div>
      </div>
    </>
  );
};

export default Pallette;