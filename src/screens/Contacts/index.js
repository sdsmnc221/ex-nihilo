import React from 'react';
import styled, { withTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { Text, SectionList } from 'react-native';

import LayoutWrapper from 'sharedUI/LayoutWrapper';
import FillGap from 'sharedUI/FillGap';
import Contact from './components/Contact';

import { getSections } from 'utils';
import { SCREENS } from 'configs';

const SectionTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.sourceSans.semiBold};
	font-size: 19px;
	color: ${({ theme }) => theme.colors.charcoal};
	margin-left: 16px;
	margin-bottom: 16px;
`;

const ContactsScreen = ({ route, navigation, theme }) => {
	const { contacts } = useSelector((state) => state.mergedData);

	return (
		<LayoutWrapper screenName={route.name}>
			<SectionList
				css={`
					${theme.styles.list}
				`}
				sections={getSections(contacts, 'name', 'number')}
				keyExtractor={(item, index) => index.toString()}
				renderSectionHeader={({ section: { title } }) => (
					<SectionTitle>{title}</SectionTitle>
				)}
				renderItem={({ item: contact }) => (
					<Contact
						contact={contact}
						firstLetter={contact.name}
						onPress={() =>
							navigation.navigate(SCREENS.CONTACT_DETAILS, {
								contact,
							})
						}
					/>
				)}
				ListFooterComponent={<FillGap height={36} />}
			/>
		</LayoutWrapper>
	);
};

export default withTheme(ContactsScreen);
