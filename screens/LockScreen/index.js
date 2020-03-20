import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components';
import { TextInput } from 'react-native-gesture-handler';

const LockScreen = ({ navigation }) => {
  const [passwordInput, setPasswordInput] = useState('');

  const onSubmit = () => navigation.navigate('HomeScreen');

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.lock}></View>
          <Text style={styles.title}>Entrer le mot de passe</Text>
          <TextInput 
            style={styles.input}
            secureTextEntry
            blurOnSubmit
            onChangeText={text => setPasswordInput(text)}
            value={passwordInput}
            onSubmitEditing={onSubmit}
          />
          <Text style={styles.hint}>Aide mot de passe Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo</Text>
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
  lock: {
    backgroundColor: '#c4c4c4',
    width: 58,
    height: 58,
    position: 'absolute',
    top: 84,
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
