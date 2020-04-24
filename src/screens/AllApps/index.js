import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Dimensions } from 'react-native';
import styled from 'styled-components';
import { ScrollView } from 'react-native-gesture-handler';

import AppIcon from 'sharedUI/AppIcon/';
import NavigationBar from 'sharedUI/NavigationBar';
import PlaceHolder from 'sharedUI/PlaceHolder';

const Icons = styled.View`
    width: 100%
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 48px;
`

const AllApps = ({ navigation }) => {
	const deviceW = Dimensions.get('window').width;
    const iconSize = (deviceW - 12) / 5 - 12;
    return(
        <>
            <SafeAreaView>
                <View style={styles.body}>
                    <Icons style={styles.firstChild}>
                        <AppIcon label='Appels' size={iconSize} type='PHONE' notifs={24} />
                        <AppIcon label='Calendrier' size={iconSize} />
                        <AppIcon label='Contact' size={iconSize} type='CONTACTS' />
                    </Icons>
                    <Icons>
                        <AppIcon label='Facebook' size={iconSize} />
                        <AppIcon label='Galerie' size={iconSize} />
                        <AppIcon label='Internet' size={iconSize} />
                    </Icons>
                    <Icons>
                        <AppIcon label='Mail' size={iconSize} type='EMAIL' />
                        <AppIcon label='Messages' size={iconSize} type='SMS' />
                        <AppIcon label='Mes notes' size={iconSize} />
                    </Icons>
                    <Icons>
                        <AppIcon size={iconSize} type='STAR' />
                        <AppIcon size={iconSize} type='STAR' />
                        <AppIcon size={iconSize} type='STAR' />
                    </Icons>
                    <Icons>
                        <AppIcon size={iconSize} type='STAR' />
                        <AppIcon size={iconSize} type='STAR' />
                        <AppIcon size={iconSize} type='STAR' />
                    </Icons>
                    <NavigationBar onPressHome={() => navigation.navigate('HomeScreen')} />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#c4c4c4',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    firstChild: {
        marginTop: 72
    }
})

export default AllApps