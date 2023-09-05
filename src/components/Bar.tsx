import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Size {
  width?: number;
  height?: number;
}

type bar = {
  label: string;
  barSize?: Size | undefined;
  shadowSize?: Size | undefined;
};
export default function Bar({label, barSize, shadowSize}: bar) {
  return (
    <View>
      <View style={styles.barContainer}>
        <View
          style={[
            styles.bar,
            {
              width: barSize?.width ? barSize?.width : 30,
              height: barSize?.height ? barSize?.height : 100,
            },
          ]}>
          <View
            style={[
              styles.shadow,
              {
                width: shadowSize?.width ? shadowSize?.width : 30,
                height: shadowSize?.height ? shadowSize?.height : 50,
              },
            ]}
          />
          <LinearGradient
            colors={[
              '#785EFF',
              '#845FFF',
              '#9862FF',
              '#A563FF',
              '#AD64FF',
            ].reverse()}
            style={styles.linearGradient}></LinearGradient>
        </View>
        <Text style={{color: 'white', marginTop: 10}}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    marginTop: 40,
    justifyContent: 'flex-end',

  },
  bar: {
    width: 30,
    height: 100,
    alignSelf: 'flex-end'
  },
  linearGradient: {
    flex: 1,
    borderRadius: 12,
    
  },
  shadow: {
    backgroundColor: 'rgba(102,119,153, 0.4)',
    height: 50,
    width: 30,
    position: 'absolute',
    zIndex: -1,
    marginTop: -20,
    borderRadius: 12,
    alignSelf: 'flex-end'
  },
});
