import { StyleSheet } from "react-native";
import { COLORS, FONT, SHADOWS, SIZES } from "../../assets/constants/theme";

const styles = StyleSheet.create({
  imageContainer: {
    height: "65%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
  },
  titleContainer: {
    width: "100%",
    maxWidth: 500,
    alignItems: "center",
    margin: "auto",
    paddingVertical: SIZES.xxLarge,
    // borderStartEndRadius: 20,
    // borderEndEndRadius: 20,
    // marginTop: -20,
  },
  description: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    textAlign: "center",
    maxWidth: 500,
    marginBottom: SIZES.xLarge,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontFamily: FONT.bold,
    color: COLORS.primary,
  },
  subtitle: {
    fontSize: SIZES.large,
    fontFamily: FONT.bold,
    color: COLORS.secondary,
    marginBottom: SIZES.xLarge,
  },
  image: {
    height: "100%",
    width: "100%",
    // margin: "auto",
  },
});

export default styles;
