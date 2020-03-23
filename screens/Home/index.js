import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import styled from 'styled-components';

import Clock from '../../sharedUI/Clock';
import AppIcon from '../../sharedUI/AppIcon/';
import NavigationBar from '../../sharedUI/NavigationBar';

const Icons = styled.View`
  position: absolute;
  bottom: 120px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HomeScreen = ({ navigation }) => {
  const deviceW = Dimensions.get('window').width;
  const iconSize = ((deviceW - 12) / 5) - 12;

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <Clock />
          <Icons>
            <AppIcon size={iconSize} />
            <AppIcon size={iconSize} active onPress={() => navigation.navigate('SmsScreen')} />
            <AppIcon size={iconSize} />
            <AppIcon size={iconSize} />
            <AppIcon size={iconSize} />
          </Icons>
          <NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} />
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

export default HomeScreen;
