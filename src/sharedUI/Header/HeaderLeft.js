import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'styled-components';

import * as lefts from './Left';

import FlexDiv from 'sharedUI/FlexDiv';

const HeaderLeft = (props) => {
	const GroupElementsLeft = lefts[props.type];

	if (!GroupElementsLeft) {
		console.warn('The header left for', props.type, ' is not available.');
	}

	return GroupElementsLeft ? (
		<FlexDiv
			direction="row"
			additionalStyle={`${css`
				position: absolute;
				left: 12px;
			`}`}>
			<GroupElementsLeft {...props} />
		</FlexDiv>
	) : null;
};

HeaderLeft.propTypes = {
	type: PropTypes.string.isRequired,
};

export default HeaderLeft;
