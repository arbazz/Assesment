import React from 'react';
import {StyleSheet, Text, ScrollView, View} from 'react-native';
import {black} from '../../utils/theme';
import {Header, ListSection, SearchBar} from '../../components';

export const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={{marginTop: 20}}>
        <SearchBar />
      </View>
      <View style={{marginTop: 30}}>
        <ListSection />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
