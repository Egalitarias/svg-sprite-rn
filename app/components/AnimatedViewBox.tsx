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
      /*
      frames.push("40 40 20 20");
      frames.push("40 40 20 20");
      frames.push("40 40 20 20");
      frames.push("40 40 20 20");
      frames.push("40 40 20 20");
      frames.push("40 40 20 20");
      frames.push("40 40 20 20");
      */
      frames.push("0 0 100 100");
      frames.push("1 1 99 99");
      frames.push("2 2 98 98");
      frames.push("3 3 97 97");
      frames.push("4 4 96 96");
      frames.push("5 5 95 95");
      frames.push("6 6 94 94");
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
    }, 50);

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
      <Circle cx="50%" cy="50%" r="20" fill="white" />
    </Svg>
  );
};

export default AnimatedViewBox;
