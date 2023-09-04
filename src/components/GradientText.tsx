import React from 'react';
import {Text, View} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import LinearGradient from 'react-native-linear-gradient';

type GradientText = {
  text: string;
  fontSize?: number;
  gradient: Array<string>;
};
const GradientText = (props: GradientText) => {
  return (
    <MaskedView
      style={{height: 24}}
      maskElement={
        <Text
          style={{
            fontSize: props.fontSize || 12,
          }}>
          {props.text}
        </Text>
      }>
      <LinearGradient
        colors={props.gradient}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0.33}}
        style={{flex: 1}}
      />
    </MaskedView>
  );
};

export default GradientText;
