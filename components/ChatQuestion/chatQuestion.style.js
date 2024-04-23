import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../assets/constants/theme";

const styles = StyleSheet.create({
  userMessage: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  responseText: {
    color: COLORS.primary,
    fontFamily: FONT.regular,
    width: "fit-content",
  },

  response: {
    backgroundColor: "#DDDDDD",
    padding: SIZES.medium,
    marginLeft: 50,
    borderEndStartRadius: SIZES.small,
    borderStartEndRadius: SIZES.small,
    borderStartStartRadius: SIZES.small,
    display: "flex",
    maxWidth: "68%",
    width: "auto",
  },
});

export default styles;
