import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components';

import Clock from '../../sharedUI/Clock';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <Clock />
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
