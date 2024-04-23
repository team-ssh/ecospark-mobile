import {StyleSheet} from "react-native";
import {COLORS, FONT, SHADOWS, SIZES} from "../../assets/constants/theme";

const styles = StyleSheet.create({
  markdown: {
    body: {
      color: "white",
      fontFamily: FONT.regular,
      width: "fit-content",
    },
  },
  userMessage: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  message: {
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
  productCarousel: {
    display: "flex",
    flexDirection: "row",
    padding: SIZES.medium,
    overflow: "scroll",
    columnGap: SIZES.medium,
  },
  productCard: {
    display: "flex",
    flexDirection: "column",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: SIZES.small,
    overflow: "hidden",
    width: 250,
  },
  productCardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 16 / 9,
  },
  productCardBody: {
    padding: SIZES.medium,
  },
  productCardBodyTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.large,
    marginBottom: SIZES.small,
    width: "100%",
  },
  productCardBodyDescription: {
    width: "100%",
    fontFamily: FONT.regular,
    fontSize: SIZES.medium,
    marginBottom: SIZES.medium,
  },
});

export default styles;
