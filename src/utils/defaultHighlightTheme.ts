import type { HighlightTheme } from '../types/highlightSyntaxTheme';

const defaultHighlightTheme: HighlightTheme = {
	commentStart: ['gray', 'dim', 'italic'],
	commentStartBogus: ['gray', 'dim', 'italic'],
	commentData: ['gray', 'dim', 'italic'],
	commentEnd: ['gray', 'dim', 'italic'],
	commentEndBogus: ['gray', 'dim', 'italic'],
	startTagStart: ['yellow'],
	tagName: ['red'],
	tagEnd: ['yellow'],
	endTagStart: ['yellow'],
	tagEndAutoclose: ['yellow'],
	attributeName: ['green'],
	attributeAssign: ['gray', 'dim'],
	attributeValueStart: ['gray'],
	attributeValueData: ['gray'],
	attributeValueEnd: ['gray'],
	charRefNamed: ['blue'],
	default: ['white'],
};

export default defaultHighlightTheme;