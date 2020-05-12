import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';
import PriceResult from './PriceResult';

const styles = StyleSheet.create({
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const PriceResultList = ({ results, title }) => (
  <View>
    <Text style={styles.heading}>{title}</Text>

    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={results}
      keyExtractor={(business) => business.id}
      renderItem={({ item }) => <PriceResult result={item} />}
    />
  </View>
);


export default PriceResultList;
