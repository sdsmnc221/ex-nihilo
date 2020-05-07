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
import { LOCALE } from 'configs';

import Provider from 'states/Provider';

import SplashScreen from 'screens/SplashScreen';
import WarningScreen from 'screens/Warning';
import IntroScreen from 'screens/Intro';
import NotificationsScreen from 'screens/LockScreen/Notifications';
import LockScreen from 'screens/LockScreen';
import HomeScreen from 'screens/Home';
import SmsScreen from 'screens/SMS';
import SmsConversation from 'screens/SMS/SmsConversation';
import JanusConversation from './screens/SMS/JanusConversation';
import ContactsScreen from 'screens/ContactsScreen';
import ContactDetails from 'screens/ContactsScreen/ContactDetails';
import AlbumScreen from 'screens/Album';
import AlbumPhotoScreen from 'screens/Album/AlbumPhoto';
import FacebookScreen from 'screens/Facebook';
import FacebookLoginScreen from 'screens/Facebook/FacebookLogin';
import EmailScreen from 'screens/Email';
import EmailDetailsScreen from 'screens/Email/EmailDetails';
import EmailLoginScreen from 'screens/Email/EmailLogin';
import AllApps from 'screens/AllApps';

// Example screens
import TypoScreen from 'screens/Examples/Typo';

import Notification from './sharedUI/Notification';

import FullScreen from 'utils/FullScreen';

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
		<Provider>
			<SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
				<NavigationContainer ref={navContainerRef}>
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
							name="AllApps"
							component={AllApps}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="SmsScreen"
							component={SmsScreen}
							options={{ title: 'Messagerie', headerLeft: null }}
						/>
						<Stack.Screen name="SmsConversation" component={SmsConversation} />
						<Stack.Screen name="JanusConversation" component={JanusConversation} />
						<Stack.Screen
							name="ContactsScreen"
							component={ContactsScreen}
							options={{ title: 'Contacts', headerLeft: null }}
						/>
						<Stack.Screen name="ContactDetails" component={ContactDetails} />
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

						{/* Example Screens */}
						<Stack.Screen
							name="TypoScreen"
							component={TypoScreen}
							options={{ title: 'Typo Example', headerLeft: null }}
						/>
					</Stack.Navigator>
					<Notification
						onPress={() => navContainerRef.current?.navigate('JanusConversation')}
					/>
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
