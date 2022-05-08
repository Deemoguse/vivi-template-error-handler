import colors from 'colors';
import assert from 'assert';
import { test } from 'mocha';
import viviTemplateErrorHandler from '../src';

test(colors.rainbow('06 – Draw Error Table – Final test'), () => {
	const error = { code: 'unexpected-character', startLine: 1, startCol: 11 };
	const received = viviTemplateErrorHandler({
		tmp: `<div class"box">\n\tHello, World!\n</div>`,
		//@ts-ignore
		error: error,
		pathToFile: 'D:/Projects/vivi-template-error-handler/src/index.ts',
		highlightTheme: { default: [] },
	});
	const expected = [
		'',
		'> Error in D:/Projects/vivi-template-error-handler/src/index.ts',
		'',
		'01 | <div class"box">',
		':::: ----------^---------------------------------',
		':::: [LN: 1, CN: 11] Error: Unexpected character.',
		':::: ',
		'02 |     Hello, World!',
		'03 | </div>',
		''
	].join('\n');
	assert.equal(colors.stripColors(received), expected);
});