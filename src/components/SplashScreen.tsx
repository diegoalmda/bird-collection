import React, { useEffect, useState } from "react";
import { Image, View } from "react-native";

const BIRD_FRAMES = [
  require("../assets/images/bird-run-1.png"),
  require("../assets/images/bird-run-2.png"),
  require("../assets/images/bird-run-3.png"),
];

const FRAME_DURATION = 350;

export default function SplashScreen() {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const frameInterval = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % BIRD_FRAMES.length);
    }, FRAME_DURATION);

    return () => {
      clearInterval(frameInterval);
    };
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-background-screen">
      <View className="w-full justify-end items-center mb-20">
        <Image
          source={BIRD_FRAMES[currentFrame]}
          className="w-full max-w-xs min-w-xs"
          resizeMode="contain"
          style={{ height: undefined, aspectRatio: 1 }}
          accessibilityLabel="Pássaro Correndo"
        />
      </View>
    </View>
  );
}
