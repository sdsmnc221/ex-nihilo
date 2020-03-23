import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components';
import { TextInput } from 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import Icon from '../../sharedUI/Icon';

const LockScreen = ({ navigation }) => {
  const [passwordInput, setPasswordInput] = useState('');

  const onSubmit = () => navigation.navigate('HomeScreen');
  const onSwipeDown = (gestureState) => navigation.navigate('NotificationsScreen');

  return (
    <>
      <SafeAreaView>
        <GestureRecognizer onSwipeDown={onSwipeDown}>
          <View style={styles.body}>
            <View style={styles.lock}>
              <Icon type="LOCK" />
            </View>
            <Text style={styles.title}>Entrer le mot de passe</Text>
            <TextInput 
              style={styles.input}
              secureTextEntry
              blurOnSubmit
              onChangeText={text => setPasswordInput(text)}
              value={passwordInput}
              onSubmitEditing={onSubmit}
            />
            <Text style={styles.hint}>Le saviez-vous les catégories de mots de passe les plus répandu sont : les dates de naissances,  le nom d’un animal de compagnie ,1 2 3 4, ou encore password.</Text>
          </View>
        </GestureRecognizer>
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
  lock: {
    marginBottom: 32,
  },
  title: {
    marginBottom: 12,
    fontSize: 14,
    fontWeight: 'bold',
  },
  input: {
    width: '64%',
    backgroundColor: '#e8e8e8',
    fontSize: 12,
    textAlign: 'center',
    padding: 8,
  },
  hint: {
    width: '64%',
    fontSize: 11,
    marginTop: 12,
    textAlign: 'center',
  },
});

export default LockScreen;
