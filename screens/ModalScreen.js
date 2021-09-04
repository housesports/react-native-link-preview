import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet, Image } from 'react-native';
import { View } from '../components/Themed';


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/houseup.png')}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 200
  },
});
