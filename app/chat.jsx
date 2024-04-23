import {Redirect} from "expo-router";
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import GettingStarted from "../components/GettingStarted/GettingStarted";
import ChatPanel from "../components/ChatPanel/ChatPanel";

function Chat() {
  return (
    <SafeAreaView style={{height: "100%"}}>
      <View style={{height: '100%'}}>
        <ChatPanel/>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

export default Chat;
