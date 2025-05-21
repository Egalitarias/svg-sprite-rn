import { ReactElement, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Svg, { Circle, Rect } from "react-native-svg";

const AnimatedCircleSquareSvg = (): ReactElement => {
  const svgLeft = useSharedValue<number>(20);

  useEffect(() => {
    svgLeft.value = withTiming(45);
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      left: svgLeft.value,
    };
  });

  return (
    <Animated.View style={[animatedStyle]}>
      <Svg height="50%" width="50%" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r={svgLeft.value}
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Rect
          x="15"
          y="15"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        />
      </Svg>
    </Animated.View>
  );
};

export default AnimatedCircleSquareSvg;
