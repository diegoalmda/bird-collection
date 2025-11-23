import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background-screen">
      <Text className="text-4xl text-neutral-white mb-4 font-quicksandBold">
        Bird Collection
      </Text>
    </View>
  );
}
