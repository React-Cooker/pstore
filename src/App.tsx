import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  SafeAreaView,
  Platform,
  TextInput,
} from 'react-native';
import { FlatList } from 'react-native/types_generated/index';

function App(): React.JSX.Element { const isDarkMode = useColorScheme() === 'dark'; 
return (
    <SafeAreaView style={[styles.safeArea,{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, },]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.contentContainer}>
        <Text style={styles.header}>PATİKASTORE</Text>
        <TextInput sytle={styles.searchBar} placeholder='Ara...'>

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
  safeArea: {
    flex: 1,
    paddingBottom: 0,
    paddingHorizontal: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems:'center',
  },
  header: {
    
  } 
  searchBar: {
    
  }
});

export default App;