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
import { COLORS } from "../../assets/constants/theme";
import styles from "./chatQuestion.style";

function ChatQuestion({ message }: props) {
  return (
    <>
      <View style={styles.userMessage}>
        <View style={styles.response}>
          <Text style={styles.responseText}>{message.message}</Text>
        </View>
      </View>
    </>
  );
}

export default ChatQuestion;
