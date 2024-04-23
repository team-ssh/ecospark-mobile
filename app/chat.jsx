import { Redirect } from "expo-router";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import GettingStarted from "../components/GettingStarted/GettingStarted";
import ChatPanel from "../components/ChatPanel/ChatPanel";

function Chat() {
  return (
    <SafeAreaView>
      <View>
        <ChatPanel />
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default Chat;
