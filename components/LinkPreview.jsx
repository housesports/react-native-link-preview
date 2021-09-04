import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


function LinkPreview(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Preview here</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 12,
    color: 'gray',
    marginTop: 10
  }
});


export default LinkPreview;
