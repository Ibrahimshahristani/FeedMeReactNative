import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 100,
    borderRadius: 4,
  },
  name: {
    fontWeight: 'bold',
  },
});

const PriceResult = ({ result }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('FeedMeDetail', {
      id: result.id,
    });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.name}>
        {result.rating}
        {' '}
        stars
        {' '}
        from
        {' '}
        {result.review_count}
        {' '}
        reviews
      </Text>
    </TouchableOpacity>
  );
};

export default PriceResult;
