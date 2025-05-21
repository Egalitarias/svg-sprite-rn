import {
  Atlas,
  Canvas,
  Skia,
  useImage,
  useRectBuffer,
} from "@shopify/react-native-skia";
import { useEffect } from "react";
import { useSharedValue } from "react-native-reanimated";

export default function AnimatedStyleUpdateExample() {
  const counter = useSharedValue(0);
  useEffect(() => {
    const interval = setInterval(() => {
      counter.value = (counter.value + 1) % 8;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const spriteMap = useImage(
    require("../../assets/images/animation/sprite-sheet.webp")
  );

  const numberOfSprites = 1;
  const sprites = useRectBuffer(numberOfSprites, (rect, i) => {
    "worklet";
    let frameSelect;
    if (!counter) {
      frameSelect = 0;
    } else {
      frameSelect = 36 * Math.floor(counter.value);
    }
    rect.setXYWH(frameSelect, 0, 36, 80);
  });

  const transforms = [Skia.RSXform(3, 0, 50, 100)];

  return (
    <Canvas style={{ flex: 1 }}>
      <Atlas image={spriteMap} sprites={sprites} transforms={transforms} />
    </Canvas>
  );
}
