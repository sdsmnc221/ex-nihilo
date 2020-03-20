import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import moment from 'moment';
import 'moment/locale/fr';

import SplashScreen from './screens/SplashScreen';
import WarningScreen from './screens/Warning';
import NotificationsScreen from './screens/LockScreen/Notifications';
import LockScreen from './screens/LockScreen';
import HomeScreen from './screens/Home';

import FullScreen from "./utils/FullScreen";

const App = () => {
  moment.locale('fr');
  
  const Stack = createStackNavigator();

  FullScreen.enable();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='SpashScreen' component={SplashScreen} />
        <Stack.Screen name='WarningScreen' component={WarningScreen} />
        <Stack.Screen name='NotificationsScreen' component={NotificationsScreen} />
        <Stack.Screen name='LockScreen' component={LockScreen} />
        <Stack.Screen name='HomeScreen' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
