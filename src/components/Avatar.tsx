import React from 'react';

import {View, StyleSheet, Image} from 'react-native';
import {black} from '../utils/theme';

type Avatar = {
  uri: string;
  width?: number | undefined;
  height?: number | undefined;
  borderColor?: string;
  backgroundColor?: string;
};

export default function Avatar({
  uri,
  width,
  height,
  borderColor,
  backgroundColor,
}: Avatar) {
  return (
    <View
      style={{
        ...styles.avatar,
        ...{
          borderColor: borderColor && borderColor,
          borderWidth: 1,
          backgroundColor: backgroundColor ? backgroundColor : black,
        },
      }}>
      <Image
        source={{
          uri,
        }}
        width={width || 35}
        height={height || 35}
        borderRadius={360}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 360,
    backgroundColor: black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondBorder: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
