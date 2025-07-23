import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imgURL}} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>

      {/* Eğer ürünün inStock özelliği false ise, "STOKTA YOK" yazısını göster.
        Bu, "koşullu render etme" (conditional rendering) tekniğidir.
      */}
      {!product.inStock && <Text style={styles.outOfStock}>STOKTA YOK</Text>}
    </View>
  );
};

export default ProductCard;