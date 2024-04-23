import styles from "./chatResponse.style";
import {Image, Text, View} from "react-native";
import Button from "../common/button/Button";

function ProductCard({product}) {
  return (
    <View style={styles.productCard}>
      <Image
        source={{uri: `https://ecospark.htwo.art/${product.cover_image}`}}
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