import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import Markdown from "react-native-markdown-display";
import { COLORS } from "../../assets/constants/theme";
import styles from "./chatResponse.style";

function ChatResponse({ message }: props) {
  return (
    <View style={styles.userMessage}>
      <View style={styles.message}>
        <Markdown style={styles.markdown}>{message.message}</Markdown>
      </View>
    </View>
  );
}

export default ChatResponse;
