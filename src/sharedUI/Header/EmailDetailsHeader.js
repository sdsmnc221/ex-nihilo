import React from 'react';
import styled, { withTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import IconButton from 'sharedUI/Button/IconButton';

import { SCREENS, SIZES } from 'configs';

const Wrapper = styled.View`
	height: ${SIZES.HEADER_BACK_H};
	${({ theme }) => theme.styles.flex(null, 'flex-start', null, true)}
    background-color: ${({ theme }) => theme.colors.persianRed};
	padding-left: 22px;
`;

const EmailDetailsHeader = ({ theme }) => {
	const navigation = useNavigation();

	return (
		<Wrapper>
			<IconButton
				type="ARROW_LEFT_THICK"
				onPress={() => navigation.navigate(SCREENS.EMAIL)}
			/>
		</Wrapper>
	);
};

export default withTheme(EmailDetailsHeader);
