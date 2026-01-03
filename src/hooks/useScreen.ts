import { useWindowDimensions } from "react-native";

export const useScreen = () => {
  const { width, height, fontScale, scale } = useWindowDimensions();

  const isSmallDevice = width < 375;
  const isTablet = width >= 768;

  return {
    width,
    height,
    isSmallDevice,
    isTablet,
    fontScale,
    scale,
    percentageWidth: (val: number) => (width * val) / 100,
    percentageHeight: (val: number) => (height * val) / 100,
  };
};
