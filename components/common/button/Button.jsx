import { Text, TouchableOpacity } from "react-native";
import styles from "./button.styles";

function Button({ title, color, onPress, width = "85%" }) {
  return (
    <TouchableOpacity style={styles.container(color, width)} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default Button;
