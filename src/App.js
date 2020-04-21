import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BackHandler } from 'react-native';

import moment from 'moment';
import 'moment/locale/fr';

import SplashScreen from 'screens/SplashScreen';
import WarningScreen from 'screens/Warning';
import IntroScreen from 'screens/Intro';
import NotificationsScreen from 'screens/LockScreen/Notifications';
import LockScreen from 'screens/LockScreen';
import HomeScreen from 'screens/Home';
import SmsScreen from 'screens/SMS';
import SmsConversation from 'screens/SMS/SmsConversation';
import ContactsScreen from 'screens/ContactsScreen';
import AlbumScreen from 'screens/Album';
import AlbumPhotoScreen from 'screens/Album/AlbumPhoto';
import FacebookScreen from 'screens/Facebook';
import FacebookLoginScreen from 'screens/Facebook/FacebookLogin';
import EmailScreen from 'screens/Email';
import EmailDetailsScreen from 'screens/Email/EmailDetails';
import EmailLoginScreen from 'screens/Email/EmailLogin';

import FullScreen from 'utils/FullScreen';

const App = () => {
	moment.locale('fr');

	const Stack = createStackNavigator();

	const onBackButtonPressed = () => {
		return true;
	};
	//Disable Back native button
	BackHandler.addEventListener('hardwareBackPress', onBackButtonPressed);

	FullScreen.enable();

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="SplashScreen"
					component={SplashScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="WarningScreen"
					component={WarningScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="IntroScreen"
					component={IntroScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="NotificationsScreen"
					component={NotificationsScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="LockScreen"
					component={LockScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="SmsScreen"
					component={SmsScreen}
					options={{ title: 'Messagerie', headerLeft: null }}
				/>
				<Stack.Screen name="SmsConversation" component={SmsConversation} />
				<Stack.Screen
					name="ContactsScreen"
					component={ContactsScreen}
					options={{ title: 'Contacts', headerLeft: null }}
				/>
				<Stack.Screen
					name="AlbumScreen"
					component={AlbumScreen}
					options={{ title: 'Photos', headerLeft: null }}
				/>
				<Stack.Screen
					name="AlbumPhotoScreen"
					component={AlbumPhotoScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="FacebookScreen"
					component={FacebookScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="FacebookLoginScreen"
					component={FacebookLoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="EmailScreen"
					component={EmailScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="EmailLoginScreen"
					component={EmailLoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="EmailDetailsScreen"
					component={EmailDetailsScreen}
					options={{ title: '' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
