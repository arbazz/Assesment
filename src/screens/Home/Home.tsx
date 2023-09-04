import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '../../components';
import {black} from '../../utils/theme';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
});
