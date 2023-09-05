import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Accordion from './Accordion';
import Plus from '../assets/Plus';
import {black, primary} from '../utils/theme';

export default function FooterHome() {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable style={styles.contaienr}>
        <Accordion icon={<Plus color="white" />} bgColor="black" />
        <Text style={styles.label}>Edit</Text>
      </Pressable>
      <View style={styles.juction} />
      <Accordion size={50} icon={<Plus color={'white'} />} bgColor={primary} />
      <View style={styles.juction} />

      <Pressable style={styles.contaienr}>
        <Accordion icon={<Plus color="white" />} bgColor="black" />
        <Text style={styles.label}>Join Meeting</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  contaienr: {
    flexDirection: 'row',
    backgroundColor: '#292929',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  label: {
    color: 'white',
    marginLeft: 20,
  },
  juction: {
    backgroundColor: '#292929',
    width: 20,
    height: 20,
  },
});
