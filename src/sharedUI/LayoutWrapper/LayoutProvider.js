import React from 'react';

import useGlobalGame from 'hooks/useGlobalGame';

export default ({ children }) => {
	useGlobalGame();

	return <>{children}</>;
};
