import React from 'react';
import { ThemeProvider } from 'styled-components';

import themeConfigs from './theme';
import typoConfigs from './typo';
import shadowsConfigs from './shadows';
import predefinedStyles from './styles';

const theme = {
	...themeConfigs,
	shadows: { ...shadowsConfigs },
	styles: {
		...typoConfigs,
		...predefinedStyles,
	},
};

const GlobalTheme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default GlobalTheme;
