import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import WarningScreen from './screens/Warning';
import NotificationsScreen from './screens/LockScreen/Notifications';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='SpashScreen' component={SplashScreen} />
        <Stack.Screen name='WarningScreen' component={WarningScreen} />
        <Stack.Screen name='NotificationsScreen' component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
