import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';

import Clock from '../../sharedUI/Clock';
import Notification from '../../sharedUI/Notification';

const NotificationsList = styled.ScrollView`
  width: 80%;
  max-height: 56%;
`;

const Swiper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

const SwiperText = styled.Text`
  font-size: 11px;
  letter-spacing: 0.8px;
`;

const SwiperNotch = styled.View`
  margin-top: 5px;
  width: 100px;
  height: 5px;
  background-color: #565656;
`;

const NotificationsScreen = ({ route, navigation }) => {
  const { contactsRef } = route.params;

  const [contacts, setContacts] = useState([
    '950',
    '550',
    '438',
    'Marie Dupont',
    '117'
  ])

  useEffect(() => {
    if (contactsRef && contactsRef.current) {
      const deviceContacts = contactsRef.current.filter(c => c.phoneNumbers.length > 0);
      if (deviceContacts.length > 0) {
        setContacts(deviceContacts.map(c => c.phoneNumbers[0].number));
      }
    }
  }, [contactsRef]);

  const onPress = () => navigation.navigate('LockScreen');

  const notifications = contacts.map(c => {
    const type =  Math.random() >= 0.5 ? 'message' : 'call';
    return {
      type,
      date: 'le 25/02/2020',
      title: c,
      message: type === 'message' ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo' : ''
    };
  });

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <Clock />
          <NotificationsList>
            {notifications.map((n, i) => <Notification key={i} type={n.type} date={n.date} title={n.title} message={n.message} />)}
          </NotificationsList>
          <Swiper onPress={onPress}>
            <SwiperText>Swipe to unlock</SwiperText>
            <SwiperNotch />
          </Swiper>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#c4c4c4',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 12,
  }
});

export default NotificationsScreen;
