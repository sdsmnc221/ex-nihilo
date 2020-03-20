import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import WarningScreen from './screens/Warning';
import NotificationsScreen from './screens/LockScreen/Notifications';
import LockScreen from './screens/LockScreen';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='SpashScreen' component={SplashScreen} />
        <Stack.Screen name='WarningScreen' component={WarningScreen} />
        <Stack.Screen name='NotificationsScreen' component={NotificationsScreen} />
        <Stack.Screen name='LockScreen' component={LockScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
