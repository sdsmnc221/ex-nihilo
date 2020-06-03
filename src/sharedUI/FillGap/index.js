import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';

import { SIZES } from 'configs';

const Gap = styled.View`
	width: 100%;
	height: ${({ height }) => height}px;
`;

const FillGap = ({ height }) => <Gap height={height} />;

FillGap.propTypes = {
	height: PropTypes.number,
};

FillGap.defaultProps = {
	height: SIZES.NAV_BAR_H,
};

export default FillGap;
