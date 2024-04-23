import { Text, TouchableOpacity } from "react-native";
import styles from "./button.styles";

function Button({ title, color, onPress }) {
  return (
    <TouchableOpacity style={styles.container(color)} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
