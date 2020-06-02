import React from 'react';
import { css } from 'styled-components';

import StyledIcon from 'sharedUI/Icon/StyledIcon';

const spacing = css`
	margin-right: 12px;
`;

const SmsConversationHeaderRight = () => (
	<>
		<StyledIcon
			type="PHONE"
			width={17.04}
			height={22.71}
			additionalStyle={`${spacing}`}
		/>
		<StyledIcon type="DOTS_VERTICAL" />
	</>
);

export default SmsConversationHeaderRight;
