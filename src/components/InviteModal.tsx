import React, {Dispatch, SetStateAction} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable, RegisteredStyle, ViewStyle} from 'react-native';
import {black, primary} from '../utils/theme';
import Animated, { AnimateStyle } from 'react-native-reanimated';

type InviteModal = {
  open?: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  bottom: string;
};

export default function InviteModal({open, onChange, bottom}: InviteModal) {
  return (
    <Animated.View style={[styles.container, {bottom,}]}>
      <Text style={styles.text}>Invite Collaborators</Text>
      <Text style={[styles.text, {fontSize: 10}]}>
        Lorem Ipsum ismet dolar sit omet
      </Text>
      <Text style={[styles.text, {marginTop: 10}]}>Name Or Email</Text>
      <TextInput
        placeholder="☑️ e.g John, john@gmail.com"
        placeholderTextColor={'white'}
      />
      <Text style={[styles.text, {fontSize: 12}]}>
        This site is protected by reCaptcha and the google{' '}
        <Text style={styles.link}>Privacy Policy</Text> and{' '}
        <Text style={styles.link}>Terms of Service</Text>apply
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Pressable
          onPress={() => onChange(false)}
          style={[styles.button, {backgroundColor: black}]}>
          <Text style={styles.text}>Cancel</Text>
        </Pressable>
        <Pressable onPress={() => onChange(false)} style={styles.button}>
          <Text style={styles.text}>Add Colloborator</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'black',
    height: 200,
    width: '100%',
    bottom: '23%',
    elevation: 10,
    borderRadius: 19,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  text: {
    color: 'white',
  },
  link: {
    color: primary,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: primary,
    marginTop: 10,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
});
