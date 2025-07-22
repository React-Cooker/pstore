import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  SafeAreaView,
  Platform,
} from 'react-native';

function App(): React.JSX.Element { const isDarkMode = useColorScheme() === 'dark'; 
return (
    <SafeAreaView style={[styles.safeArea,{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, },]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={styles.contentContainer}>
        <Text> just clean screen </Text>

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
});

export default App;