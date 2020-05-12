import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import PriceResultList from '../components/PriceResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [businesses, setBusinesses] = useState([]);

  const searchAPI = useCallback(async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 30,
        term,
        location: 'vancouver',
      },
    });

    setBusinesses(response.data.businesses);
  }, [term]);

  useEffect(() => {
    searchAPI();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterByPrice = useCallback(
    (price) => businesses.filter((business) => business.price === price),
    [businesses],
  );

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchAPI()}
      />

      <PriceResultList results={filterByPrice('$')} title="Budget Eats" />
      <PriceResultList results={filterByPrice('$$')} title="Average" />
      <PriceResultList results={filterByPrice('$$$')} title="Gettin' Pricey" />
      <PriceResultList results={filterByPrice('$$$$')} title="Once in a Blue Moon" />

    </View>
  );
};

export default SearchScreen;
