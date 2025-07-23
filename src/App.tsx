import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import ProductCard from './components/ProductCard';
import products_data from './products.json';

// 1. ADIM: Ürünün "kimlik kartını" (interface) burada tanımladık.
interface Product {
  id: number;
  title: string;
  imgURL: string;
  price: string;
  inStock: boolean;
}

function App(): React.JSX.Element {
  
  // 2. ADIM: Fonksiyona, alacağı item'ın tipini öğrettik.
  const renderProduct = ({item}: {item: Product}) => (
    <ProductCard product={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.header}>PATİKASTORE</Text>
        <TextInput style={styles.searchBar} placeholder="Ara..." />

        <FlatList
          data={products_data}
          renderItem={renderProduct}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  inner_container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#800080',
    textAlign: 'center',
    margin: 5,
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 12,
    marginVertical: 10,
    fontSize: 16,
  },
});

export default App;