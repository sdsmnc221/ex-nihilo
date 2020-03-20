import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import styled from 'styled-components';
import {request, PERMISSIONS} from 'react-native-permissions';
import Contacts from 'react-native-contacts';

const Button = styled.Text`
  position: absolute;
  bottom: 84px;
  font-size: 14px;
  font-weight: bold;
  background-color: #c4c4c4;
  padding: 12px;
  padding-right: 48px;
`;

const WarningScreen = () => {
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
          console.log(contacts);
        }
      });
    });
  }, []);

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.logo}></View>
          <Text style={styles.title}>Warning</Text>
          <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu lobortis, lobortis ipsum et, aliquet leo. Vestibulum tincidunt turpis pretium neque vulputate, nec imperdiet velit ultricies. In ac quam ex. Ut leo libero, ultrices volutpat velit ut, vehicula bibendum nibh. Vestibulum lacus lectus, tincidunt vitae mauris quis, semper condimentum ante.
          </Text>
          <Button>Suivant</Button>
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
    padding: 12,
  },
});

export default WarningScreen;
