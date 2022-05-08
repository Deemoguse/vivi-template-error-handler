import assert from 'assert';
import { test } from 'mocha';
import HighlightSyntax from '../src/utils/highlightSyntax';

test('05 – Highlight Syntax', () => {
	const received = new HighlightSyntax('<div class="some-class">some-text</div>').result;
	const expected = '\x1B[33m<\x1B[39m\x1B[31mdiv\x1B[39m\x1B[37m \x1B[39m\x1B[32mclass\x1B[39m\x1B[2m\x1B[90m=\x1B[39m\x1B[22m\x1B[90m"\x1B[39m\x1B[90msome-class\x1B[39m\x1B[90m"\x1B[39m\x1B[33m>\x1B[39m\x1B[37msome-text\x1B[39m\x1B[33m</\x1B[39m\x1B[31mdiv\x1B[39m\x1B[33m>\x1B[39m';
	assert.equal(received, expected);
});