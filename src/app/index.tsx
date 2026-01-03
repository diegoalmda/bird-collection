import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background-secondary">
      <View className="w-full justify-end items-center mb-20">
        <Text className="font-quicksandBold text-lg">Home screen</Text>
      </View>
    </View>
  );
}
