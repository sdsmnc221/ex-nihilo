import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';
import { View } from 'react-native';
import { NeuView } from 'utils/react-native-neu-element';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

const Wrapper = styled.View`
	position: relative;
	top: 2px;
`;

const SearchPlaceholder = ({ additionalStyle, theme }) => {
	return (
		<Wrapper css={additionalStyle}>
			<NeuView
				color={theme.colors.ghostWhite}
				width={57}
				height={21}
				borderRadius={31}
				style={theme.shadows.defaultShadow}
			/>
			<StyledIcon
				type="TEXT_CURSOR"
				width={12}
				height={12}
				additionalStyle={css`
					position: absolute;
					top: 4.5px;
					left: 4.5px;
				`}
			/>
			<StyledIcon
				type="SEARCH"
				width={12}
				height={12}
				additionalStyle={css`
					position: absolute;
					top: 4.5px;
					right: 4.5px;
				`}
			/>
		</Wrapper>
	);
};

SearchPlaceholder.propTypes = {
	additionalStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

SearchPlaceholder.defaultProps = {
	additionalStyle: null,
};

export default withTheme(SearchPlaceholder);
