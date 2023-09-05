import React from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {secondaryBlack} from '../utils/theme';

type accordion = {
  icon: JSX.Element;
  bgColor?: string;
  size?: number;
  onPress?: () => void;
};

export default function Accordion({icon, bgColor, size, onPress}: accordion) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        ...styles.accordion,
        ...{
          backgroundColor: bgColor ? bgColor : secondaryBlack,
          width: size || 35,
          height: size || 35,
        },
      }}>
      {icon}
    </Pressable>
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
