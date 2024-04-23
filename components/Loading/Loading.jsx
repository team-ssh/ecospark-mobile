import { View } from "react-native";
import LoadingDots from "react-native-loading-dots";
import styles from "./loading.style";

function Loading() {
  return (
    <View style={styles.userMessage}>
      <View style={styles.message}>
        <LoadingDots size={10} bounceHeight={5} />
      </View>
    </View>
  );
}

export default Loading;
