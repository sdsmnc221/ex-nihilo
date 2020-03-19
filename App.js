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
    marginBottom: 84,
  },
  title: {
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

export default App;
