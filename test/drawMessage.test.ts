
import assert from 'assert';
import { test } from 'mocha';

import DrawMessage from '../src/utils/drawMessage';

describe('03 – Draw Message', () => {
	test('With invalid char', () => {
		const received = new DrawMessage('test-error', '0').result;
		const expected = '\x1B[31mError: Test error – \'0\'.\x1B[39m';
		assert.equal(received, expected);
	});
	test('Without invalid char', () => {
		const received = new DrawMessage('test-error').result;
		const expected = '\x1B[31mError: Test error.\x1B[39m';
		assert.equal(received, expected);
	});
	test('Length', () => {
		const received = new DrawMessage('test-error', '0').length;
		const expected = 24;
		assert.equal(received, expected);
	})
});