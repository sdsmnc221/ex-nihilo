import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';
import { Image } from 'react-native';

import STAR_IMG from 'assets/icons/STAR.png';

const STAR = ({ width, height }) => (
	<Image
		css={`
			${css`
				width: ${width}px;
				height: ${height}px;
			`}
		`}
		source={STAR_IMG}
		resizeMode="contain"
	/>
);

STAR.propTypes = {
	width: PropTypes.number,
	height: PropTypes.number,
};

STAR.defaultProps = {
	width: 24,
	height: 23,
};

export default STAR;
