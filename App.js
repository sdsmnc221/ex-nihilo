import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {request, PERMISSIONS} from 'react-native-permissions';
import Contacts from 'react-native-contacts';

const App = () => {

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

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <Text style={styles.content}>Ex nihilo.</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.black,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    color: Colors.white,
  }
});

export default App;
