import { css } from 'styled-components';
import theme from './theme';

const { acumin, cairo, superclarendon } = theme.fonts;
const { sizes } = theme.typo;

export default {
	os: {
		h1: css`
			font-family: ${cairo.semiBold};
			font-size: ${sizes.h1};
		`,
		h2: css`
			font-family: ${cairo.bold};
			font-size: ${sizes.h2};
		`,
		h3: css`
			font-family: ${acumin.bold};
			font-size: ${sizes.h3};
		`,
		body: css`
			font-family: ${acumin.medium};
			font-size: ${sizes.body};
		`,
		subtitle: css`
			font-family: ${cairo.extraLight};
			font-size: ${sizes.subtitle};
		`,
	},
	dataviz: {},
};
