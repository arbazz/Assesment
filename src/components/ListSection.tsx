import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Avatar from './Avatar';
import {AvatarData} from '../utils/data';
import Accordion from './Accordion';
import Menu from '../assets/Menu';
import Popup from './Popup';
import {useSharedValue, withSpring, withTiming} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Delete from '../assets/Delete';
import Animated from 'react-native-reanimated';

export default function ListSection() {
  const [popup, setPopup] = useState(false);
  const translate = useSharedValue(0);
  const right = useSharedValue(0);

  const handlePress = () => {
    setPopup(e => !e);
    if (!popup) {
      translate.value = withSpring(translate.value + 1, {
        duration: 200,
      });
    } else {
      translate.value = withSpring(0);
    }
  };
  const onSwipeLeft = ({nativeEvent}: {nativeEvent: Record<string, any>}) => {
    if (nativeEvent.state === State.ACTIVE) {
      // Handle the swipe left action here
      console.log(right.value);

      if (right.value <= 50) {
        console.log('Swiped left!');
        right.value = withSpring(right.value + 50);
      }
      if(right.value >=50){
        right.value = withTiming(0);
      }
    }
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PanGestureHandler onGestureEvent={onSwipeLeft}>
        <Animated.View style={{flexDirection: 'row'}}>
          <Animated.View
            style={[
              styles.container,
              styles.border,
              {width: '100%', right: right},
            ]}>
            <View style={styles.container}>
              <Avatar uri={AvatarData[0].uri} />
              <View style={styles.names}>
                <Text style={styles.text}>Esther Howard</Text>
                <Text style={[styles.text, {fontSize: 10}]}>
                  esther@gmail.com
                </Text>
              </View>
            </View>
            <View>
              <Accordion icon={<Menu color="white" />} onPress={handlePress} />
            </View>
            {popup && <Popup translate={translate} />}
          </Animated.View>
          <Animated.View style={[styles.delete, {right: right}]}>
            <Delete color="white" />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
  },
  names: {
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
  border: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.6,
    paddingBottom: 20,
  },
  delete: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },
});
