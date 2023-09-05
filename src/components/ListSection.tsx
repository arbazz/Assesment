import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Avatar from './Avatar';
import {AvatarData} from '../utils/data';
import Accordion from './Accordion';
import Menu from '../assets/Menu';
import Popup from './Popup';
import {useSharedValue, withSpring} from 'react-native-reanimated';

export default function ListSection() {
  const [popup, setPopup] = useState(false);
  const translate = useSharedValue([{scale: 0}]);
  const handlePress = () => {
    setPopup(e => !e);
    translate.value[0].scale = withSpring(translate.value[0].scale + 1);
  };
  return (
    <View style={[styles.container, styles.border]}>
      <View style={styles.container}>
        <Avatar uri={AvatarData[0].uri} />
        <View style={styles.names}>
          <Text style={styles.text}>Esther Howard</Text>
          <Text style={[styles.text, {fontSize: 10}]}>esther@gmail.com</Text>
        </View>
      </View>
      <Accordion icon={<Menu color="white" />} onPress={handlePress} />
      {popup && <Popup />}
    </View>
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
});
