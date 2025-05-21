import { ReactElement } from "react";
import Svg, { Circle, Rect } from "react-native-svg";

const AnimatedViewBox = (props): ReactElement => {
  // const viewBoxCoords = "-5 -5 10 10";
  const viewBoxCoords = "0 0 100 100";

  return (
    <Svg viewBox={viewBoxCoords} xmlns="http://www.w3.org/2000/svg">
      <Rect x="0" y="0" width="100%" height="100%" />
      <Circle cx="50%" cy="50%" r="4" fill="white" />
    </Svg>
  );
};

export default AnimatedViewBox;
