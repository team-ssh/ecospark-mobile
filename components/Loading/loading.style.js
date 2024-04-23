import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../assets/constants/theme";

const styles = StyleSheet.create({
  userMessage: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  message: {
    backgroundColor: "white",
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    borderEndEndRadius: SIZES.small,
    borderStartEndRadius: SIZES.small,
    borderStartStartRadius: SIZES.small,
    display: "flex",
    marginRight: 50,
    maxWidth: "68%",
    width: "auto",
  },
  responseText: {
    color: "white",
    fontFamily: FONT.regular,
    width: "fit-content",
  },
});

export default styles;
