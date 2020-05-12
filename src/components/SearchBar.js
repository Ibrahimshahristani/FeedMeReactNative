import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  background: {
    height: 50,
    borderRadius: 6,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

const SearchBar = ({ term, onTermChange, onTermSubmit }) => (
  <View style={styles.background}>
    <EvilIcons style={styles.icon} name="search" size={35} />
    <TextInput
      value={term}
      style={styles.input}
      placeholder="Search"
      onChangeText={(newTerm) => onTermChange(newTerm)}
      onSubmitEditing={() => onTermSubmit()}
    />
  </View>
);

export default SearchBar;
