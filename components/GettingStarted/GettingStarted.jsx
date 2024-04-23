import { Image, Text, View } from "react-native";
import { router } from "expo-router";
import styles from "./gettingStarted.style";
import Button from "../../components/common/button/Button";

function GettingStarted() {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/started.jpg")}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>EcoSpark </Text>
        <Text style={styles.subtitle}>Your ESG Advisor Bot</Text>

        <Text style={styles.description}>
          Navigating ESG opportunities for a greener future. Let's grow
          responsibly!
        </Text>

        <Button title="Get Started" onPress={() => router.push("/chat")} />
      </View>
    </View>
  );
}

export default GettingStarted;
