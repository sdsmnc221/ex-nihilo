import React from 'react';
import { css } from 'styled-components';

import StyledIcon from 'sharedUI/Icon/StyledIcon';
import SearchPlaceholder from '../components/SearchPlaceholder';

const spacing = css`
	margin-right: 12px;
`;

const ContactsHeaderRight = () => (
	<>
		<SearchPlaceholder additionalStyle={spacing} />
		<StyledIcon
			useImg
			type="STAR_PRESSED"
			width={29}
			height={27}
			additionalStyle={`${spacing} ${css`
				top: 1px;
			`}`}
		/>
		<StyledIcon
			type="DOTS_VERTICAL"
			additionalStyle={css`
				top: 2px;
			`}
		/>
	</>
);

export default ContactsHeaderRight;
