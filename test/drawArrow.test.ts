import assert from 'assert';
import { test } from 'mocha';
import DrawArrow from '../src/utils/drawArrow';

describe('02 – Draw Arrow', () => {
	test('Long Message', () => {
		const received = new DrawArrow(10, 5).result;
		const expected = '\x1B[31m----^-----\x1B[39m';
		assert.equal(received, expected);
	});
	test('Short Message', () => {
		const received = new DrawArrow(3, 5).result;
		const expected = '\x1B[31m----^\x1B[39m';
		assert.equal(received, expected);
	})
});

