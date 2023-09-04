import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {primary} from '../utils/theme';
import {AvatarData, ProfilePicLink} from '../utils/data';
import Avatar from './Avatar';
import Accordion from './Accordion';
import Plus from '../assets/Plus';
import Share from '../assets/Share';
import Menu from '../assets/Menu';
import Bar from './Bar';

export default function Card() {
  return (
    <View style={styles.container}>
      <View
        style={{...styles.headerCard, ...{justifyContent: 'space-between'}}}>
        <View style={styles.headerCard}>
          {!!AvatarData.length &&
            AvatarData.map((e, i) => {
              return (
                <View key={i} style={{marginRight: -10}}>
                  <Avatar
                    uri={e.uri}
                    borderColor={primary}
                    backgroundColor={primary}
                  />
                </View>
              );
            })}
          <Accordion icon={<Plus color="white" />} bgColor={'#6646B9'} />
        </View>
        <View style={styles.headerCard}>
          <Accordion icon={<Share color="white" />} bgColor={'#694DB1'} />
          <View style={{width: 10}} />
          <Accordion icon={<Menu color="white" />} bgColor={'#694DB1'} />
        </View>
      </View>
      <View style={{marginTop: 20, flexDirection: 'row'}}>
        <Image style={styles.imageProfile} source={{uri: ProfilePicLink}} />
        <View style={{marginLeft: 20, justifyContent: 'center'}}>
          <Text style={[styles.titleCard, {fontSize: 12}]}>
            Ads Video Editor
          </Text>
          <Text style={styles.titleCard}>First Project</Text>
        </View>
      </View>
      <View>
        <Bar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    borderRadius: 20,
    padding: 12,
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleCard: {
    fontSize: 20,
    color: 'white',
  },
  imageProfile: {
    width: 60,
    height: 60,
    borderRadius: 14,
  },
});
