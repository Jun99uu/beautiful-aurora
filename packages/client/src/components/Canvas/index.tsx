import { useAtom } from "jotai";
import { colorState } from "@/store/colorAtom";
import "./canvas.scss";

const Canvas = () => {
  const [colors] = useAtom(colorState);
  const radialStyle = (color: string) => {
    return {
      background: `radial-gradient(circle, ${color}, transparent, transparent)`,
    };
  };

  return (
    <div className="canvas-wrapper" style={{ backgroundColor: colors.bg }}>
      {/* <div className="aurora-wrapper" /> */}
      {colors.color.map((co, idx) => (
        <div className={`circle circle-${idx}`} style={radialStyle(co)} />
      ))}
    </div>
  );
};

export default Canvas;
