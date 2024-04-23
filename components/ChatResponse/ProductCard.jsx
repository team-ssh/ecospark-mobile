import styles from "./chatResponse.style";
import {Image, Text, View} from "react-native";
import Button from "../common/button/Button";

function ProductCard({product}) {
  return (
    <View style={styles.productCard}>
      <Image
        source={{uri: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
        style={styles.productCardImage}/>
      <View style={styles.productCardBody}>
        <Text style={styles.productCardBodyTitle}>{product.name}</Text>
        <Text style={styles.productCardBodyDescription}>{product.description}</Text>
        <Button title={"View Product"} width={'100%'} />
      </View>
    </View>
  )
}

export default ProductCard;