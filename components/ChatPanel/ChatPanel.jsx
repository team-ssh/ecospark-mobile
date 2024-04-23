import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
} from "react-native";
import styles from "./chatPanel.style";
import LoadingDots from "react-native-loading-dots";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useEffect, useState} from "react";
import {COLORS} from "../../assets/constants/theme";
import {MaterialIcons} from "@expo/vector-icons";
import {router} from "expo-router";
import ChatResponse from "../ChatResponse/ChatResponse";
import ChatQuestion from "../ChatQuestion/ChatQuestion";
import {match} from "ts-pattern";
import {axiosInstance} from "../../services/axios";
import Loading from "../Loading/Loading";

function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeValue = (e) => {
    setValue(e.nativeEvent.text);
  };

  const handleSubmit = async () => {
    if (value) {
      let temp = [...messages, {message: value, role: "user"}];
      setMessages(temp);
      setValue("");
      setLoading(true);
      try {
        const response = await axiosInstance.post("/chatbot", {
          chatHistory: messages.map(message => {
            return {
              message: message.message,
              role: message.role,
              // remove products
            }
          }),
          message: value,
          clientId: "123",
        });

        if (response?.status.toString().startsWith("2")) {
          // console.log(response.data.message.replace(/product_id:\d+/g, ""));
          temp = [
            ...temp,
            {
              message: response.data.message,
              products: response.data.products,
              role: "system",
            },
          ];
          setMessages(temp);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.messageContainer}>
            <ChatResponse
              message={{message: "Hello, how can I help you today?", products: []}}
            />
            {messages?.map((msg, i) => (
              <View key={i}>
                {msg.role === "system" ? (
                  <ChatResponse message={msg}/>
                ) : (
                  <ChatQuestion message={msg}/>
                )}
              </View>
            ))}

            {loading && <Loading/>}
            {/* {messages?.map((msg, i) => (
               
              ))} */}
          </View>
        </ScrollView>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Type your message"
              value={value}
              onChange={(e) => {
                handleChangeValue(e);
              }}
            />
          </View>
          <TouchableOpacity style={styles.inputBtn}>
            <MaterialIcons
              name="keyboard-voice"
              size={25}
              color={COLORS.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.inputBtn} onPress={handleSubmit}>
            <FontAwesome size={20} name="send" color={COLORS.primary}/>
          </TouchableOpacity>
        </View>
      </View>

      {/* </TouchableWithoutFeedback> */}
    </KeyboardAvoidingView>
  );
}

export default ChatPanel;
