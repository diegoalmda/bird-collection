import React from "react";
import { View } from "react-native";
import { GameLoading } from "./GameLoading";

export function SplashScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background-screen pb-20">
      <GameLoading />
    </View>
  );
}
