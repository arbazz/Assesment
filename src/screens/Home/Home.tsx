import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Card, GradientText, Header, SwipeableTab} from '../../components';
import {black} from '../../utils/theme';
import Accordion from '../../components/Accordion';
import Search from '../../assets/Search';
import {tabData} from '../../utils/data';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{marginTop: 20}}>
          <GradientText
            fontSize={20}
            gradient={['#DE9F84', '#C29BBD', '#8484FF', '#9479FF']}
            text="Your recent videos"
          />
          <Text style={styles.time}>03:24</Text>
          <Text style={styles.day}>Monday</Text>
        </View>
        <View style={{marginTop: 50}}>
          <Accordion icon={<Search color="white" />} />
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'row',
          marginTop: 20,
          alignSelf: 'flex-start',
        }}
        style={{maxHeight: 80}}
        horizontal={true}>
        {!!tabData.length &&
          tabData.map((e, i) => {
            return (
              <SwipeableTab
                key={i}
                active={e.active}
                text={e.name}
                number={e.number}
              />
            );
          })}
      </ScrollView>
      <View>
        <Card />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  time: {
    color: 'white',
    marginTop: 20,
    fontSize: 70,
  },
  day: {
    fontSize: 60,
    marginTop: -25,
    color: '#BB62A0',
  },
});
