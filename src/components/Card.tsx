import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {primary} from '../utils/theme';
import {AvatarData, ProfilePicLink} from '../utils/data';
import Avatar from './Avatar';
import Accordion from './Accordion';
import Plus from '../assets/Plus';
import Share from '../assets/Share';
import Menu from '../assets/Menu';
import Bar from './Bar';

type Props = {
  onPress?: () => void;
};

export default function Card({onPress}: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
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
      <View style={styles.row}>
        <View>
          <Bar label="Sun" barSize={{height: 100}} />
        </View>
        <View style={styles.bar}>
          <Bar label="Mon" />
        </View>
        <View style={styles.bar}>
          <Bar label="Tue" />
        </View>
        <View style={styles.bar}>
          <Bar label="Wed" />
        </View>
        <View style={styles.bar}>
          <Bar label="Thu" />
        </View>
        <View style={styles.bar}>
          <Bar label="Fri" />
        </View>
        <View style={styles.bar}>
          <Bar label="Sat" />
        </View>
      </View>
      <View style={[styles.row, styles.footer]}>
        <View style={styles.row}>
          <View style={styles.tpBtn}>
            <Plus color="white" />
            <Text style={{color: 'white'}}>2</Text>
          </View>
          <View style={[styles.tpBtn, {marginLeft: 10}]}>
            <Plus color="white" />
            <Text style={{color: 'white'}}>30 Mar:2023</Text>
          </View>
        </View>
        <View>
          <Pressable style={styles.pending}>
            <Text>Pending</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    borderRadius: 20,
    padding: 12,
    marginTop: 20,
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
  row: {
    flexDirection: 'row',
  },
  bar: {
    marginLeft: 20,
  },
  tpBtn: {
    backgroundColor: '#6546B5',
    flexDirection: 'row',
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pending: {
    backgroundColor: '#9E76AF',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 10,
  },
});
