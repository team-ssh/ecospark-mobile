import {
  View,
  Text,
  Image, ScrollView,
} from "react-native";
import Markdown from "react-native-markdown-display";
import Button from "../../components/common/button/Button";
import styles from "./chatResponse.style";
import ProductCard from "./ProductCard";

function ChatResponse({message}) {
  return (
    <View style={styles.userMessage}>
      <View style={styles.message}>
        <Markdown style={styles.markdown}>{message.message}</Markdown>
      </View>
      <ScrollView horizontal={true} style={{
        width: '100%'
      }} contentContainerStyle={styles.productCarousel}>
        {message.products.map((product, index) => {
          return (
            <ProductCard key={index} product={product}/>
          );
        })}
      </ScrollView>
    </View>
  );
}

export default ChatResponse;
