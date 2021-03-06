import { css } from 'styled-components';
import theme from './theme';

const { cairo, sourceSans, superclarendon } = theme.fonts;
const { sizes } = theme.typo;

export default {
	os: {
		body: css`
			font-family: ${sourceSans.regular};
			font-size: ${sizes.body};
		`,
		bodyBold: css`
			font-family: ${sourceSans.bold};
			font-size: ${sizes.body};
		`,
		body_alt: css`
			font-family: ${cairo.light};
			font-size: ${sizes.body};
		`,
		body_alt_bold: css`
			font-family: ${cairo.bold};
			font-size: ${sizes.body};
		`,
		boldBody: css`
			font-family: ${cairo.semiBold};
			font-size: 15px;
			letter-spacing: 0.75px;
		`,
		h1: css`
			font-family: ${cairo.semiBold};
			font-size: ${sizes.h1};
		`,
		h2: css`
			font-family: ${cairo.bold};
			font-size: ${sizes.h2};
		`,
		h2_alt: css`
			font-family: ${sourceSans.bold};
			font-size: ${sizes.h2};
		`,
		h3: css`
			font-family: ${sourceSans.bold};
			font-size: ${sizes.h3};
		`,
		h3_alt: css`
			font-family: ${cairo.semiBold};
			font-size: ${sizes.h3_alt};
		`,
		titleConversation: css`
			font-family: ${sourceSans.bold};
			font-size: ${sizes.h3_alt};
			letter-spacing: 0.27px;
		`,
		notifsCount: css`
			font-family: ${cairo.light};
			font-size: ${sizes.body};
		`,
		subtitle: css`
			font-family: ${sourceSans.extraLight};
			font-size: ${sizes.subtitle};
		`,
		input: css`
			font-family: ${sourceSans.extraLight};
			font-size: ${sizes.body};
		`,
		inputItalic: css`
			font-family: ${sourceSans.italic};
			font-size: ${sizes.body};
		`,
		smsText: css`
			font-family: ${sourceSans.regular};
			font-size: ${sizes.h3};
		`,
		smsTextBold: css`
			font-family: ${sourceSans.bold};
			font-size: ${sizes.h3};
		`,
	},
	dataviz: {
		title: css`
			font-family: ${superclarendon};
			font-size: ${sizes.titleDataviz};
		`,
		body: css`
			font-family: ${superclarendon};
			font-size: ${sizes.bodyDataviz};
		`,
		tab: css`
			font-family: ${sourceSans.bold};
			font-size: ${sizes.bodyDataviz};
		`,
	},
};
