import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View } from '../components/Themed';


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/houseup.png')}
      />
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
