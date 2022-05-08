import assert from 'assert';
import { describe, test } from 'mocha';
import DrawPosLabel from '../src/utils/drawPosLabel';

describe('04 – Draw Pos Label', () => {
	test('Result', () => {
		const received = new DrawPosLabel(20, 5).result;
		const expected = '\x1B[90m[\x1B[39m\x1B[90mLN:\x1B[39m \x1B[33m20\x1B[39m\x1B[90m, \x1B[39m\x1B[90mCN:\x1B[39m \x1B[33m5\x1B[39m\x1B[90m]\x1B[39m';
		assert.equal(received, expected);
	});
	test('Length', () => {
		const received = new DrawPosLabel(20, 5).lenght;
		const expected = 15;
		assert.equal(received, expected);
	});
});