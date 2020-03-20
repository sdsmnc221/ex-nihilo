import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native';
import styled from 'styled-components';

const DateTime = styled.View``;

const Time = styled.Text`
  font-weight: bold;
  font-size: 96px;
  line-height: 96px;
`

const Date = styled.Text`
  font-size: 11px;
`;

const NotificationsList = styled.ScrollView`
  width: 80%;
  max-height: 56%;
  margin: 24px 0;
`;

const Swiper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
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

const NotificationsScreen = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <DateTime>
            <Time>13</Time>
            <Time>45</Time>
            <Date>Mardi 17 Mars 2020</Date>
          </DateTime>
          <NotificationsList>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.</Text>
          </NotificationsList>
          <Swiper>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationsScreen;
