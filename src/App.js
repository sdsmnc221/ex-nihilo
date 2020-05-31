import React, { useRef } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
	SafeAreaProvider,
	initialWindowSafeAreaInsets,
} from 'react-native-safe-area-context';

import moment from 'moment';
import 'moment/locale/fr';

import FullScreen from 'utils/FullScreen';
import { LOCALE } from 'configs';
import { SCREENS } from 'configs/constants';

import StoreProvider from 'states/StoreProvider';
import ThemeProvider from 'configs/ThemeProvider';

import SplashScreen from 'screens/Splash';
import WarningScreen from 'screens/Warning';
import IntroScreen from 'screens/Intro';
import NotificationsScreen from 'screens/Lock/Notifications';
import LockScreen from 'screens/Lock';
import HomeScreen from 'screens/Home';
import AllAppsScreen from 'screens/AllApps';
import SmsScreen from 'screens/SMS';
import SmsConversationScreen from 'screens/SMS/SmsConversation';
import JanusConversationScreen from './screens/SMS/JanusConversation';
import ContactsScreen from 'screens/Contacts';
import ContactDetailsScreen from 'screens/Contacts/ContactDetails';
import AlbumScreen from 'screens/Album';
import AlbumPhotoScreen from 'screens/Album/AlbumPhoto';
import FacebookScreen from 'screens/Facebook';
import FacebookLoginScreen from 'screens/Facebook/FacebookLogin';
import EmailScreen from 'screens/Email';
import EmailDetailsScreen from 'screens/Email/EmailDetails';
import EmailLoginScreen from 'screens/Email/EmailLogin';
import InternetScreen from 'screens/Internet';

// Example screens
import TypoScreen from 'screens/Examples/Typo';

import Notification from './sharedUI/Notification';

const Stack = createStackNavigator();

const App = () => {
	// Set date time locale to FR
	moment.locale(LOCALE);

	// Disable Back native button
	// useEffect, useCallback, useFocusEffect ==> enfin regarder la doc
	const onBackButtonPressed = () => {
		return true;
	};
	BackHandler.addEventListener('hardwareBackPress', onBackButtonPressed);

	// Enable Fullscreen mode
	FullScreen.enable();

	const navContainerRef = useRef(null);

	return (
		<StoreProvider>
			<ThemeProvider>
				<SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
					<NavigationContainer ref={navContainerRef}>
						<Stack.Navigator>
							<Stack.Screen
								name={SCREENS.SPLASH}
								component={SplashScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.WARNING}
								component={WarningScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.INTRO}
								component={IntroScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.NOTIFICATIONS}
								component={NotificationsScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.LOCK}
								component={LockScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.HOME}
								component={HomeScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.ALL_APPS}
								component={AllAppsScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.SMS}
								component={SmsScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.SMS_CONVERSATION}
								component={SmsConversationScreen}
							/>
							<Stack.Screen
								name={SCREENS.SMS_JANUS}
								component={JanusConversationScreen}
							/>
							<Stack.Screen
								name={SCREENS.CONTACTS}
								component={ContactsScreen}
								options={{ title: 'Contacts', headerLeft: null }}
							/>
							<Stack.Screen
								name={SCREENS.CONTACTS_DETAILS}
								component={ContactDetailsScreen}
							/>
							<Stack.Screen
								name={SCREENS.ALBUM}
								component={AlbumScreen}
								options={{ title: 'Photos', headerLeft: null, headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.ALBUM_PHOTO}
								component={AlbumPhotoScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.FACEBOOK}
								component={FacebookScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.FACEBOOK_LOGIN}
								component={FacebookLoginScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.EMAIL}
								component={EmailScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.EMAIL_LOGIN}
								component={EmailLoginScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name={SCREENS.EMAIL_DETAILS}
								component={EmailDetailsScreen}
								options={{ title: '' }}
							/>
							<Stack.Screen
								name={SCREENS.INTERNET}
								component={InternetScreen}
								options={{ headerShown: false }}
							/>

							{/* Example Screens */}
							<Stack.Screen
								name="TypoScreen"
								component={TypoScreen}
								options={{
									title: 'Typo Example',
									headerLeft: null,
									headerShown: false,
								}}
							/>
						</Stack.Navigator>
						{/* <Notification
						onPress={() => navContainerRef.current?.navigate('JanusConversation')}
					/> */}
					</NavigationContainer>
				</SafeAreaProvider>
			</ThemeProvider>
		</StoreProvider>
	);
};

export default App;
