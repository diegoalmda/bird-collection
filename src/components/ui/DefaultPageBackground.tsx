import { useScreen } from "@hooks/useScreen";
import { Image, View, ViewProps } from "react-native";

type DefaultPageBackgroundProps = ViewProps & {
  children: React.ReactNode;
};

export function DefaultPageBackground({
  children,
  style,
  className,
  ...rest
}: DefaultPageBackgroundProps) {
  const { height } = useScreen();

  return (
    <View
      className={`flex-1 items-center justify-center bg-background-secondary ${className}`}
      style={style}
      {...rest}
    >
      <Image
        source={require("@assets/images/bg-plant.png")}
        className="absolute left-0 h-full w-full"
        resizeMode="cover"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          height: height,
          opacity: 0.5,
        }}
      />
      <View className="flex-1 w-full items-center justify-center">
        {children}
      </View>
    </View>
  );
}
