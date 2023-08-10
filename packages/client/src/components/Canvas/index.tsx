import { useAtom } from "jotai";
import { colorState } from "@/store/colorAtom";
import "./canvas.scss";

const Canvas = () => {
  const [colors] = useAtom(colorState);
  const radialStyle = (color: string) => {
    return {
      background: `radial-gradient(ellipse, ${color}, transparent, transparent)`,
    };
  };
  const opacity = colors.transperant / 100;

  return (
    <div
      className="canvas-wrapper"
      style={{ backgroundColor: colors.bg, opacity }}
    >
      {colors.color.map((co, idx) => (
        <div className={`circle circle-${idx}`} style={radialStyle(co)} />
      ))}
    </div>
  );
};

export default Canvas;
