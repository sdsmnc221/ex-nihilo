import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, Text } from 'react-native';

import FlexDiv from 'sharedUI/FlexDiv';

const InfoTitle = styled.Text`
	font-family: ${({ theme }) => theme.fonts.sourceSans.regular};
	font-size: ${({ theme }) => theme.typo.sizes.h3};
	letter-spacing: 0.21px;
	color: ${({ theme }) => theme.colors.charcoal};
`;

const InfoText = styled.Text`
	font-family: ${({ theme }) => theme.fonts.sourceSans.light};
	font-size: ${({ theme }) => theme.typo.sizes.h3};
	letter-spacing: 0.21px;
	color: ${({ theme }) => theme.colors.charcoal};
`;

const Separator = styled.View`
	width: 100%;
	height: 1.1px;
	background-color: ${({ theme }) => theme.colors.whiskey};
	margin-top: 12px;
	margin-bottom: 18px;
`;

const ContactInfo = ({ title, info }) => (
	<>
		<FlexDiv fullWidth direction="row" justifyContent="space-between">
			<InfoTitle>{title}</InfoTitle>
			<InfoText>{info}</InfoText>
		</FlexDiv>
		<Separator />
	</>
);

ContactInfo.propTypes = {
	title: PropTypes.string.isRequired,
	info: PropTypes.string,
};

ContactInfo.defaultProps = {
	info: '',
};

export default ContactInfo;
