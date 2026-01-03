import { DefaultPageBackground } from "@components/ui/DefaultPageBackground";
import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <DefaultPageBackground>
      <View className="flex-1 w-full">
        <Text className="font-quicksandBold text-lg">Home screen</Text>
      </View>
    </DefaultPageBackground>
  );
}
