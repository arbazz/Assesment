import React from 'react-native';
import {View, TextInput} from 'react-native';
import Plus from '../assets/Plus';

export default function SearchBar() {
  return (
    <View
      style={{
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View style={{paddingHorizontal: 4}}>
        <Plus color="white" />
      </View>
      <TextInput
        style={{}}
        placeholder="Search for colloborator"
        placeholderTextColor={'white'}
      />
    </View>
  );
}
