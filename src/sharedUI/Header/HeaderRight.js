import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

import * as rights from './Right';

import FlexDiv from 'sharedUI/FlexDiv';

const HeaderRight = (props) => {
	const GroupElementsRight = rights[props.type];

	if (!GroupElementsRight) {
		console.warn('The header right for', props.type, ' is not available.');
	}

	return GroupElementsRight ? (
		<FlexDiv
			direction="row"
			additionalStyle={css`
				position: absolute;
				right: 12px;
			`}>
			<GroupElementsRight {...props} />
		</FlexDiv>
	) : null;
};

HeaderRight.propTypes = {
	type: PropTypes.string.isRequired,
};

export default HeaderRight;
