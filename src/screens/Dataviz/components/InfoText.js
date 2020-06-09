import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { View, Text } from 'react-native-animatable';

const Wrapper = styled.View`
	padding: 0 10%;
	${({ theme }) => theme.styles.flex(null, null, null, true)}
`;

const StyledText = styled.Text`
	color: ${({ theme }) => theme.colors.white};
	letter-spacing: 0.54px;
	line-height: 20px;
	${({ theme }) => theme.styles.os.body}
`;

const InfoText = ({ theme }) => {
	return (
		<Wrapper>
			<StyledText>
				Nous avons accès à 1200 photos sur votre téléphone. En moyenne un
				utilisateur stock 2300 SMS sur leur téléphone.
			</StyledText>
		</Wrapper>
	);
};

InfoText.propTypes = {};

InfoText.defaultProps = {};

export default withTheme(InfoText);
