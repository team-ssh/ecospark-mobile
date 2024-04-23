import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../../assets/constants/theme";

const styles = StyleSheet.create({
  container: (color) => ({
    height: 65,
    width: "85%",
    maxWidth: 500,
    borderRadius: SIZES.medium,
    padding: SIZES.xLarge,
    backgroundColor: color || COLORS.primary,
    padding: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  buttonText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.medium,
    color: COLORS.white,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
});

export default styles;
