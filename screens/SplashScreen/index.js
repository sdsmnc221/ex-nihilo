import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('WarningScreen'), 3200);
  }, [])

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.logo}></View>
          <Text style={styles.title}>EX NIHILO</Text>
          <Text style={styles.baseline}>The answer is out there</Text>
          <Text style={styles.loader}>Loading...</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#818181',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#c4c4c4',
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 84,
    marginBottom: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  baseline: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loader: {
    fontSize: 12,
    position: 'absolute',
    bottom: 84,
  }
});

export default SplashScreen;
