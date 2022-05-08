import assert from 'assert';
import { describe, test } from 'mocha';
import ColorizedString from '../src/utils/colorizedString';

describe('01 – Colorized String', () => {
	const received = new ColorizedString([
		['Hello,', 'red', 'bgGreen'],
		[' ', 'yellow', 'bgBlue'],
		['world!', 'black', 'bgCyan']
	]);

	test('Colorized', () => {
		const expected = '\x1B[42m\x1B[31mHello,\x1B[39m\x1B[49m\x1B[44m\x1B[33m \x1B[39m\x1B[49m\x1B[46m\x1B[30mworld!\x1B[39m\x1B[49m';
		assert.strictEqual(received.result, expected);
	});
	test('Lenght', () => {
		const expected = 13;
		assert.equal(received.length, expected);
	})
});