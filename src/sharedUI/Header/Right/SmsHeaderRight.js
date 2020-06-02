import React from 'react';
import { css } from 'styled-components';

import StyledIcon from 'sharedUI/Icon/StyledIcon';
import SearchPlaceholder from '../components/SearchPlaceholder';

const spacing = css`
	margin-right: 12px;
`;

const SmsHeaderRight = () => (
	<>
		<StyledIcon type="ADD" additionalStyle={`${spacing}`} />
		<SearchPlaceholder additionalStyle={`${spacing}`} />
		<StyledIcon
			type="DOTS_VERTICAL"
			additionalStyle={`${css`
				top: 2px;
			`}`}
		/>
	</>
);

export default SmsHeaderRight;
