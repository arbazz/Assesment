import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {black} from '../utils/theme';
import Plus from '../assets/Plus';
import Back from '../assets/Back';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

export default function Popup() {
  return (
    <Animated.View style={styles.popup}>
      <View style={styles.row}>
        <Back color="grey" />
        <Text style={styles.text}>Move File</Text>
        <Plus color="grey" />
      </View>
      <View style={styles.row}>
        <Plus color="grey" />
        <Text style={styles.text}>Move File</Text>
      </View>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  popup: {
    transform: [{scale: 0}],
    position: 'absolute',
    right: 40,
    top: -10,
    backgroundColor: black,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    zIndex: 10,
    elevation: 10,
    overflow: 'visible',
  },
  text: {
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
