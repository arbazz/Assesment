import React from 'react';
import Plus from '../assets/Plus';
import {StyleSheet, View} from 'react-native';
import {secondaryBlack} from '../utils/theme';

export default function Accordion() {
  return (
    <View style={styles.accordion}>
      <Plus color="white" />
    </View>
  );
}
const styles = StyleSheet.create({
  accordion: {
    backgroundColor: secondaryBlack,
    width: 35,
    height: 35,
    borderRadius: 360,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
