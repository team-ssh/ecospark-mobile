import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../assets/constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "space-between",
    // position: "relative",
  },
  messageContainer: {
    padding: 12,
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  message: {
    backgroundColor: "white",
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    width: "fit-content",
    marginRight: 50,
  },
  userMessage: {
    // backgroundColor: "white",
    backgroundColor: COLORS.primary,
    padding: SIZES.medium,
    borderRadius: SIZES.medium,
    width: "fit-content",
    marginLeft: 50,
  },
  responseContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  response: {
    backgroundColor: COLORS.primary,
    color: "white",
    padding: SIZES.small,
    borderRadius: SIZES.medium,
    width: "fit-content",
  },
  responseText: {
    color: "white",
    fontFamily: FONT.regular,
  },
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.medium,
    backgroundColor: COLORS.lightWhite,
    height: 100,
    // height: 60,
    // flex: 1,
    // position: "absolute",
    // paddingBottom: 200,
    // top: 0,
    // bottom: 0,
  },
  inputWrapper: {
    flex: 1,
    backgroundColor: "#EEEEEE",
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    borderRadius: SIZES.small,
  },

  input: {
    fontFamily: FONT.regular,
    width: "100%",
    height: 48,
    paddingHorizontal: SIZES.medium,
  },
  inputBtn: {
    width: 40,
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
