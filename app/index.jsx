import { Redirect } from "expo-router";
// import GettingStarted from "../components/getting-started/GettingStarted";
import { View, Text } from "react-native";
import GettingStarted from "../components/GettingStarted/GettingStarted";

function Home() {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <GettingStarted />
    </View>
  );
}

export default Home;
