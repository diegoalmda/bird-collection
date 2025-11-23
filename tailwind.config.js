import { colors } from "./src/styles/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily: {
        quicksand: ["Quicksand_400Regular"],
        quicksandLight: ["Quicksand_300Light"],
        quicksandMedium: ["Quicksand_500Medium"],
        quicksandSemiBold: ["Quicksand_600SemiBold"],
        quicksandBold: ["Quicksand_700Bold"],
        jotioneRegular: ["JotiOne_400Regular"],
      },
    },
  },
  plugins: [],
};
