import { Color } from "@/assets/colors";
import { recommendState } from "@/store/recommendAtom";
import { useAtom } from "jotai";

/**
 * 색 입력값을 감지해서, 자동으로 추천 색 4개를 생성하는 커스텀 훅
 */
export const useColor = () => {
  const [recommendColors, setRecommendColors] = useAtom(recommendState);

  /** 입력한 색의 채도 계산기 */
  const calculateSaturation = (hexColor: string): number => {
    const r = parseInt(hexColor.slice(1, 3), 16) / 255;
    const g = parseInt(hexColor.slice(3, 5), 16) / 255;
    const b = parseInt(hexColor.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    return max - min;
  };

  /** 입력한 색의 명도 계산기 */
  const calculateLuminance = (hexColor: string): number => {
    const r = parseInt(hexColor.slice(1, 3), 16) / 255;
    const g = parseInt(hexColor.slice(3, 5), 16) / 255;
    const b = parseInt(hexColor.slice(5, 7), 16) / 255;

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  /**----채도가 낮은 랜덤 색상 생성기----**/
  const getRandomInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomBlue = () => {
    const blueValue = getRandomInRange(175, 223).toString(16).padStart(2, "0");
    return `#${blueValue}${blueValue}ff`;
  };

  const getRandomGreen = () => {
    const greenValue = getRandomInRange(175, 223).toString(16).padStart(2, "0");
    return `#${greenValue}ff${greenValue}`;
  };

  const getRandomDarkRed = () => {
    const redValue = getRandomInRange(143, 175).toString(16).padStart(2, "0");
    return `#ff${redValue}${redValue}`;
  };

  const getRandomPurple = () => {
    const purpleValue1 = getRandomInRange(175, 223)
      .toString(16)
      .padStart(2, "0");
    const purpleValue2 = getRandomInRange(143, 175)
      .toString(16)
      .padStart(2, "0");
    return `#${purpleValue1}${purpleValue2}ff`;
  };

  const getRandomDarkYellow = () => {
    const yellowValue1 = getRandomInRange(143, 191)
      .toString(16)
      .padStart(2, "0");
    const yellowValue2 = getRandomInRange(111, 143)
      .toString(16)
      .padStart(2, "0");
    return `#ff${yellowValue1}${yellowValue2}`;
  };

  /**----채도가 높은 랜덤 색상 생성기----**/
  const getHighSaturationRandomInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getHighSaturationRandomBlue = () => {
    const blueValue = getHighSaturationRandomInRange(223, 255)
      .toString(16)
      .padStart(2, "0");
    const minorColor = getHighSaturationRandomInRange(50, 100)
      .toString(16)
      .padStart(2, "0");
    return `#${minorColor}${minorColor}${blueValue}`;
  };

  const getHighSaturationRandomGreen = () => {
    const greenValue = getHighSaturationRandomInRange(223, 255)
      .toString(16)
      .padStart(2, "0");
    const minorColor = getHighSaturationRandomInRange(50, 100)
      .toString(16)
      .padStart(2, "0");
    return `#${minorColor}${greenValue}${minorColor}`;
  };

  const getHighSaturationRandomDarkRed = () => {
    const redValue = getHighSaturationRandomInRange(191, 255)
      .toString(16)
      .padStart(2, "0");
    const minorColor = getHighSaturationRandomInRange(50, 100)
      .toString(16)
      .padStart(2, "0");
    return `#${redValue}${minorColor}${minorColor}`;
  };

  const getHighSaturationRandomPurple = () => {
    const purpleValueMajor = getHighSaturationRandomInRange(175, 255)
      .toString(16)
      .padStart(2, "0");
    const purpleValueMinor = getHighSaturationRandomInRange(100, 150)
      .toString(16)
      .padStart(2, "0");
    return `#${purpleValueMajor}${purpleValueMinor}ff`;
  };

  const getHighSaturationRandomDarkYellow = () => {
    const yellowValueMajor = getHighSaturationRandomInRange(223, 255)
      .toString(16)
      .padStart(2, "0");
    const yellowValueMinor = getHighSaturationRandomInRange(100, 150)
      .toString(16)
      .padStart(2, "0");
    return `#${yellowValueMajor}${yellowValueMinor}33`;
  };

  /**----명도가 낮은 랜덤 색상 생성기----**/
  const getLowLuminanceRandomInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getLowLuminanceRandomBlue = () => {
    const blueValue = getLowLuminanceRandomInRange(20, 60)
      .toString(16)
      .padStart(2, "0");
    return `#${blueValue}${blueValue}88`;
  };

  const getLowLuminanceRandomGreen = () => {
    const greenValue = getLowLuminanceRandomInRange(20, 60)
      .toString(16)
      .padStart(2, "0");
    return `#${greenValue}88${greenValue}`;
  };

  const getLowLuminanceRandomRed = () => {
    const redValue = getLowLuminanceRandomInRange(60, 100)
      .toString(16)
      .padStart(2, "0");
    return `#88${redValue}${redValue}`;
  };

  const getLowLuminanceRandomPurple = () => {
    const purpleValue1 = getLowLuminanceRandomInRange(40, 80)
      .toString(16)
      .padStart(2, "0");
    const purpleValue2 = getLowLuminanceRandomInRange(20, 60)
      .toString(16)
      .padStart(2, "0");
    return `#${purpleValue1}${purpleValue2}88`;
  };

  const getLowLuminanceRandomYellow = () => {
    const yellowValue1 = getLowLuminanceRandomInRange(60, 100)
      .toString(16)
      .padStart(2, "0");
    const yellowValue2 = getLowLuminanceRandomInRange(30, 70)
      .toString(16)
      .padStart(2, "0");
    return `#88${yellowValue1}${yellowValue2}`;
  };

  /** 일반 채도에서의 색상 정의 */
  const getColorFunction = (exclude: string) => {
    const functions = [
      { key: "blue", func: getRandomBlue },
      { key: "green", func: getRandomGreen },
      { key: "darkRed", func: getRandomDarkRed },
      { key: "purple", func: getRandomPurple },
      { key: "darkYellow", func: getRandomDarkYellow },
    ];

    return functions.filter((f) => f.key !== exclude).map((f) => f.func);
  };

  /** 높은 채도에서의 색상 정의 */
  const getHighSaturationColorFunction = (exclude: string) => {
    const functions = [
      { key: "blue", func: getHighSaturationRandomBlue },
      { key: "green", func: getHighSaturationRandomGreen },
      { key: "darkRed", func: getHighSaturationRandomDarkRed },
      { key: "purple", func: getHighSaturationRandomPurple },
      { key: "darkYellow", func: getHighSaturationRandomDarkYellow },
    ];

    return functions.filter((f) => f.key !== exclude).map((f) => f.func);
  };

  /** 낮은 명도에서의 색상 정의 */
  const getLowLuminanceColorFunction = (exclude: string) => {
    const functions = [
      { key: "blue", func: getLowLuminanceRandomBlue },
      { key: "green", func: getLowLuminanceRandomGreen },
      { key: "red", func: getLowLuminanceRandomRed },
      { key: "purple", func: getLowLuminanceRandomPurple },
      { key: "yellow", func: getLowLuminanceRandomYellow },
    ];

    return functions.filter((f) => f.key !== exclude).map((f) => f.func);
  };

  /** 명도, 채도 구분 컨트롤러 */
  const getSuitableColorFunction = (thatColor: string) => {
    const luminance = calculateLuminance(thatColor);
    const saturation = calculateSaturation(thatColor);
    const isLowLuminance = luminance < 0.2;
    const isHighSaturation = saturation > 0.65;

    if (isLowLuminance) {
      return getLowLuminanceColorFunction(thatColor);
    } else {
      return isHighSaturation
        ? getHighSaturationColorFunction(thatColor)
        : getColorFunction(thatColor);
    }
  };

  /** 하나의 추천 색 조합 짜주는 함수 */
  const eachColorsGenerator = (idx: number, thatColor: string): Color => {
    let colorFuncs = getSuitableColorFunction(thatColor);
    let newRecommendList: string[] = [];

    for (let i = 0; i < 4; i++) {
      if (i === idx) {
        newRecommendList.push(thatColor);
      } else {
        const randomFunc =
          colorFuncs[Math.floor(Math.random() * colorFuncs.length)];
        newRecommendList.push(randomFunc());
      }
    }

    let newRecommendBg =
      colorFuncs[Math.floor(Math.random() * colorFuncs.length)]();

    return {
      color: newRecommendList,
      bg: newRecommendBg,
      transparent: 100,
    };
  };

  /** 몇 번째 색상이 무슨 색으로 선택되었는지 */
  const autoRecommendColors = (idx: number, thatColor: string) => {
    const newArr = [];
    for (let i = 0; i < 4; i++) {
      newArr.push(eachColorsGenerator(idx, thatColor));
    }

    setRecommendColors(newArr);
  };

  return { autoRecommendColors, recommendColors };
};
