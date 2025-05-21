import { ReactElement, useCallback, useEffect, useState } from "react";
import Svg, { Circle, Rect } from "react-native-svg";

const AnimatedViewBox = (props): ReactElement => {
  const generateFrames = (): string[] => {
    const frames: string[] = [];
    for (let i = 0; i < 50; i++) {
      // Code to be executed 10 times
      const left = 20 + i;
      const right = 40 + i;
      const frame = `${left} ${right} 20 20`;
      console.log(frame);
      //frames.push(frame);
      frames.push("10 10 90 90");
      frames.push("10 10 90 90");
      frames.push("10 10 90 90");
      frames.push("0 10 80 90");
      frames.push("0 10 80 90");
      frames.push("0 10 80 90");
      frames.push("0 10 80 90");
      frames.push("0 10 80 90");
    }

    return frames;
  };

  const [frames, setFrames] = useState<string[]>([]);
  const [viewBoxCoords, setViewBoxCoords] = useState<string>("0 0 100 100");
  const [frameIndex, setFrameIndex] = useState<number>(0);

  const initialiseFrames = useCallback(() => {
    if (frames.length === 0) {
      setFrames(generateFrames());
    }
  }, [frames, setFrames]);

  useEffect(() => {
    if (frames.length === 0) {
      initialiseFrames();
    }
    const intervaleTimer = setInterval(() => {
      setViewBoxCoords(frames[frameIndex]);
      setFrameIndex((frameIndex) => frameIndex + 1);

      if (frameIndex >= frames.length - 2) {
        clearInterval(intervaleTimer);
      }
    }, 1000);

    return () => {
      clearInterval(intervaleTimer);
    };
  });
  return (
    <Svg
      height="100"
      width="100"
      viewBox={viewBoxCoords}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect x="0" y="0" width="100%" height="100%" />
      <Circle cx="50%" cy="50%" r="4" fill="white" />
    </Svg>
  );
};

export default AnimatedViewBox;
