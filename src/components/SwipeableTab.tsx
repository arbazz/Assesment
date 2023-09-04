import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {primary} from '../utils/theme';

type swipeableTab = {
  active?: boolean;
  text: string;
  number: number;
};
export default function SwipeableTab({active, text, number}: swipeableTab) {
  return (
    <View
      style={{
        ...styles.container,
        ...{
          backgroundColor: !active ? 'transparent' : primary,
          borderColor: !active ? 'grey' : 'none',
          borderWidth: !active ? 1 : 0,
        },
      }}>
      <Text style={{color: !active ? 'grey' : 'white'}}>{text}</Text>
      <View
        style={{
          ...styles.numberContainer,
          ...{
            backgroundColor: !active ? '#383838' : '#8150FF',
          },
        }}>
        <Text style={{color: !active ? 'grey' : 'white'}}>{number}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    alignSelf: 'flex-start',
    padding: 15,
    flexDirection: 'row',
    borderRadius: 20,
    marginRight: 15,
  },
  numberContainer: {
    marginLeft: 10,
    paddingHorizontal: 4,
    borderRadius: 4,
  },
});
