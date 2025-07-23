import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, // Sütun içinde eşit alan kaplaması için
    backgroundColor: '#eceff1',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4, // Ekran yüksekliğinin dörtte biri
    width: '100%', // Kapsayıcısının tamamını kapla
    borderRadius: 10,
    resizeMode: 'contain', // Resmin tamamının görünmesini sağla
  },
  title: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  price: {
    marginTop: 3,
    fontSize: 16,
    color: 'grey',
    fontWeight: 'bold',
  },
  outOfStock: {
    marginTop: 3,
    color: 'red',
    fontWeight: 'bold',
  },
});