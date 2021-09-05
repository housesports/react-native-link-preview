import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import LinkPreview from './react-native-link-preview/LinkPreview';
import { Text, View } from './Themed';


export default function PreviewScreenInfo({ path }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://retoolapi.dev/mka0wj/linkdata")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log('result :>> ', result);
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const renderNativeItem = (item) => {
    return (<View style={styles.itemContainer}>
      <Text>{item.id})  <Text></Text>{item.url}</Text>
      <LinkPreview key={item.id} url={item.url} />
    </View>);
  }

  if (error) {
    return <View style={styles.getStartedContainer}><Text>Error: {error.message}</Text></View>;
  } else if (!isLoaded) {
    return <View style={styles.getStartedContainer}><Text>Loading...</Text></View>;
  } else {
    return (
      <View>
        <View style={styles.getStartedContainer}>
          <FlatList
            data={items}
            renderItem={({item}) => renderNativeItem(item)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15
  },
});
