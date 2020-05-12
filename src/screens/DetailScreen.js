import React, { useEffect, useState } from 'react';
import {
  Text, Image, ScrollView, StyleSheet,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import yelp from '../api/yelp';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
  photo: {
    width: 400,
    height: 400,
  },
});

const DetailScreen = () => {
  const route = useRoute();
  const { id } = route.params;
  const [{
    name, image_url: imageUrl, categories, rating, photos,
  }, setBusiness] = useState({
    name: '',
    image_url: 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-asia.com/headlines/regulation-safety/why-iso-standards-are-crucial-for-organic-and-natural-transparency-cftas-president/10238025-1-eng-GB/Why-ISO-standards-are-crucial-for-organic-and-natural-transparency-CFTAS-president_wrbm_large.jpg',
    categories: [],
    rating: '',
    photos: [],
  });

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = (await yelp.get(`/${id}`)).data;
        setBusiness(response);
      } catch (e) {
        console.log(e);
      }
    };

    fetchDetail();
  }, [id]);

  const renderCategories = () => categories.map(({ title }) => (
    <Text>{title}</Text>
  ));

  const renderPhotos = () => photos.map((photo) => (
    <Image
      style={styles.photo}
      source={{ uri: photo }}
    />
  ));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image
        style={styles.photo}
        source={{ uri: imageUrl }}
      />
      {renderCategories()}
      <Text>
        {rating}
        {' '}
        Stars
      </Text>
      {renderPhotos()}
    </ScrollView>
  );
};

export default DetailScreen;
