import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {
  Card,
  FooterHome,
  GradientText,
  Header,
  InviteModal,
  SwipeableTab,
} from '../../components';
import {black, primary} from '../../utils/theme';
import Accordion from '../../components/Accordion';
import Search from '../../assets/Search';
import {tabData} from '../../utils/data';

export const Home = ({navigation}) => {
  const [inviteModal, setInviteModal] = useState(false);
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = daysOfWeek[time.getDay()];

  const hours = time.getHours();
  const minutes = time.getMinutes();
  return (
    <ScrollView style={styles.container}>
      <Header
        onPlusPress={() => {
          setInviteModal(true);
        }}
      />
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
          <Text style={styles.time}>
            {hours}:{minutes < 10 ? `0${minutes}` : minutes}
          </Text>
          <Text style={styles.day}>{dayOfWeek}</Text>
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
      <Card onPress={()=>navigation.navigate("Project")}/>
      <FooterHome />
      <View style={styles.center}>
        <View style={[styles.dots, {borderColor: primary, borderWidth: 1}]} />
        <View style={styles.dots} />
        <View style={styles.dots} />
        <View style={styles.dots} />
      </View>
      {inviteModal && <InviteModal onChange={setInviteModal} />}
      <View style={{height: 40}} />
    </ScrollView>
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
  dots: {
    backgroundColor: '#2E2E2E',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
});
