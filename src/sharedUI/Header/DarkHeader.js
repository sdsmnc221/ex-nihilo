import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

import IconButton from 'sharedUI/Button/IconButton';

import { SCREENS, SIZES } from 'configs';

const Wrapper = styled.View`
	margin-top: 12px;
	${({ theme }) => theme.styles.flex(null, null, 'row', true)}
	min-height: ${SIZES.HEADER_H}px;
    background-color: ${({ theme }) => theme.colors.black};
`;

const Title = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	${({ theme }) => theme.styles.dataviz.title}
`;

const DarkHeader = ({ title, theme }) => {
	const navigation = useNavigation();

	return (
		<Wrapper>
			<IconButton
				type="ARROW_LEFT"
				color={theme.colors.white}
				width={19.36}
				height={13.94}
				onPress={() => navigation.navigate(SCREENS.END_MENU)}
				additionalStyle={`
					${css`
						position: absolute;
						left: 20px;
					`}
				`}
			/>
			<Title>{title}</Title>
		</Wrapper>
	);
};

DarkHeader.propTypes = {
	title: PropTypes.string,
	type: PropTypes.string,
};

DarkHeader.defaultProps = {
	title: null,
	type: null,
};

export default withTheme(DarkHeader);
