import React from 'react';

import {View, StyleSheet} from 'react-native';
import Avatar from './Avatar';
import Accordion from './Accordion';
import Bell from '../assets/Bell';
import Plus from '../assets/Plus';

const URI =
  'https://th.bing.com/th/id/R.ffdbfa66adbf046694820603fddcfb19?rik=%2fOePpCGRWd6cfA&riu=http%3a%2f%2fmedia1.santabanta.com%2ffull1%2fMiscellaneous%2fCartoon+Characters%2fcartoon-characters-76a.jpg&ehk=vXTABMJo8fublrfyHoRK7rm4%2f2fAuIytYhlqm%2fs%2fJns%3d&risl=&pid=ImgRaw&r=0';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.row}>
        <Avatar uri={URI} />
        <View style={{marginLeft: -10}}>
          <Avatar uri={URI} />
        </View>
        <View style={{marginLeft: 10}}>
          <Accordion icon={<Plus color="white" />} />
        </View>
      </View>
      <View style={styles.row}>
        <View style={{marginRight: 20}}>
          <Bell color="white" />
        </View>
        <Avatar uri={URI} borderColor={'pink'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {flexDirection: 'row', alignItems: 'center'},
});
