import React, { useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components';
import {request, PERMISSIONS} from 'react-native-permissions';
import Contacts from 'react-native-contacts';

import Icon from '../../sharedUI/Icon';

const Button = styled.TouchableOpacity`
  position: absolute;
  bottom: 84px;
  font-size: 14px;
  font-weight: bold;
  background-color: #c4c4c4;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const WarningScreen = ({ navigation }) => {
  const contactsRef = useRef(null);

  async function requestPermissions() {
    const rationale = {
      title: 'Permissions thing',
      message: 'Request permission',
      buttonPositive: 'Please accept bare mortal',
    };
    const readContactsStatus = await request(PERMISSIONS.ANDROID.READ_CONTACTS, rationale);
    const writeContactsStatus = await request(PERMISSIONS.ANDROID.WRITE_CONTACTS, rationale);
    return {readContactsStatus, writeContactsStatus};
  }
  
  useEffect(() => {
    requestPermissions().then(statuses => {
      console.log(statuses);
      Contacts.getAllWithoutPhotos((err, contacts) => {
        if (err === 'denied'){
          // error
        } else {
          contactsRef.current = contacts;
        }
      });
    });
  }, []);

  const onPress = () => navigation.navigate('NotificationsScreen', { contactsRef });

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.logo}></View>
          <Text style={styles.title}>Warning</Text>
          <Text style={styles.content}>L’expérience que nous vous proposons contient du contenu explicite et violent pouvant choquer votre sensibilité. </Text>
          <Text style={styles.content}>Nous recommandons aux personnes sensibles et aux enfants de ne pas y participer.</Text>
          <Button onPress={onPress}>
            <Text>Suivant  </Text>
            <Icon type="ARROW_LEFT" />
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#565656',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#c4c4c4',
    width: 58,
    height: 58,
    position: 'absolute',
    top: 84,
  },
  title: {
    color: '#e8e8e8',
    marginBottom: 12,
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    color: '#e8e8e8',
    fontSize: 12,
    textAlign: 'center',
    paddingLeft: 24,
    paddingRight: 24,
  },
});

export default WarningScreen;
