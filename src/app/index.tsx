import { DefaultPageBackground } from "@components/ui/DefaultPageBackground";
import { LocalTabs } from "@components/ui/LocalTabs";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <DefaultPageBackground>
      <SafeAreaView className="flex-1 w-full px-8">
        <LocalTabs
          tabs={[
            {
              key: "tab1",
              title: "Coleção",
              content: <Text>Coleções</Text>,
            },
            {
              key: "tab2",
              title: "Ovos",
              content: <Text>Ovos para chocar</Text>,
            },
            {
              key: "tab3",
              title: "Catálogo",
              content: <Text>Aves encontradas</Text>,
            },
          ]}
        />
      </SafeAreaView>
    </DefaultPageBackground>
  );
}
