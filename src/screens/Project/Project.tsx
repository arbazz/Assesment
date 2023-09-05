import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native';
import {black, primary} from '../../utils/theme';
import {Avatar, Bar, Header, VideoPlayer} from '../../components';
import {AvatarData} from '../../utils/data';
import Plus from '../../assets/Plus';
import Accordion from '../../components/Accordion';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

export const Project = () => {
  const bottom = useSharedValue(0);

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        style={[styles.imageBackground]}
        source={{uri: AvatarData[1].uri}}>
        <Pressable
          style={{padding: 10}}
          onPress={() => (bottom.value = withSpring(bottom.value + 200))}>
          <Header backButton={true} />
        </Pressable>
      </ImageBackground>
      <View style={styles.secondContainer}>
        <Text style={[styles.text, {fontSize: 8}]}>Ads Video Editor</Text>
        <Text style={[styles.text, {fontSize: 20}]}>First Project</Text>
        <View style={[styles.rowContainer, {marginTop: 20}]}>
          <Text style={[styles.text, {fontSize: 12}]}>Project Date</Text>
          <View style={[styles.tpBtn, {marginLeft: 10}]}>
            <Plus color="white" />
            <Text style={{color: 'white'}}>30 Mar:2023</Text>
          </View>
        </View>
        <View style={styles.rowContainer}>
          <Text style={[styles.text, {fontSize: 12}]}>Colloborator:</Text>
          <View style={[styles.tpBtn, {marginLeft: 10}]}>
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
          </View>
        </View>
        <View style={[styles.rowContainer]}>
          <Text style={[styles.text, {fontSize: 12}]}>Project Date</Text>
          <View style={[styles.tpBtn, {marginLeft: 10}]}>
            <Pressable style={styles.pending}>
              <Text>Pending</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.seprator} />
        <View style={[styles.rowContainer, {marginTop: 20}]}>
          <Text style={styles.text}>Stastics</Text>
          <View style={[styles.rowContainer, styles.week]}>
            <Text style={styles.text}>Weekly</Text>
            <Plus color="white" />
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
      </View>
      {/* <VideoPlayer bottom={bottom} /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    flex: 1,
  },
  imageBackground: {
    height: 250,
  },
  text: {
    color: 'white',
  },
  secondContainer: {
    padding: 10,
    marginTop: 10,
    backgroundColor: primary,
    flex: 1,
  },
  tpBtn: {
    backgroundColor: '#6546B5',
    flexDirection: 'row',
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 4,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pending: {
    backgroundColor: '#9E76AF',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginTop: 10,
  },
  seprator: {
    borderColor: 'grey',
    borderWidth: 0.5,
    marginTop: 20,
  },
  week: {
    borderColor: 'white',
    borderRadius: 18,
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  bar: {
    marginLeft: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
