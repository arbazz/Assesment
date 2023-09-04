import React from 'react';
import {StyleSheet, View} from 'react-native';
import {secondaryBlack} from '../utils/theme';

type accordion = {
  icon: JSX.Element;
  bgColor?: string;
};

export default function Accordion({icon, bgColor}: accordion) {
  return (
    <View
      style={{
        ...styles.accordion,
        ...{backgroundColor: bgColor ? bgColor : secondaryBlack},
      }}>
      {icon}
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
