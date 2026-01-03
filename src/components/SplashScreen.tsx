import { GameLoading } from "@components/ui/GameLoading";
import React from "react";
import { View } from "react-native";

export function SplashScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background-secondary pb-20">
      <GameLoading />
    </View>
  );
}
