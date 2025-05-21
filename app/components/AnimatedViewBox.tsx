import { ReactElement, useEffect, useState } from "react";
import Svg, { Circle, Rect } from "react-native-svg";

const AnimatedViewBox = (props): ReactElement => {
  // const viewBoxCoords = "-5 -5 10 10";
  // const viewBoxCoords = "0 0 100 100";
  const [viewBoxCoords, setViewBoxCoords] = useState<string>("0 0 100 100");
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    const intervaleTimer = setInterval(() => {
      setViewBoxCoords(toggle ? "0 0 100 100" : "-5 -5 10 10");
      setToggle((toggle) => !toggle);
    }, 500);

    return () => {
      clearInterval(intervaleTimer);
    };
  });
  return (
    <Svg viewBox={viewBoxCoords} xmlns="http://www.w3.org/2000/svg">
      <Rect x="0" y="0" width="100%" height="100%" />
      <Circle cx="50%" cy="50%" r="4" fill="white" />
    </Svg>
  );
};

export default AnimatedViewBox;
