import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center bg-screen-primary">
        <Text className="text-xl font-bold text-rose-700">
          Página não encontrada!
        </Text>
        <Link href="/" className="mt-4 text-blue-500">
          Voltar o inicio
        </Link>
        <Stack.Screen options={{ title: "Página no encontrada" }} />
      </View>
    </>
  );
}
