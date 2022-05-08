import HTMLLexer from 'html-lexer';
import ColorizedString from './colorizedString';
import defaultHighlightTheme from './defaultHighlightTheme';
import type { LexerToken } from '../types/lexerToken';
import type { HighlightTheme } from '../types/highlightSyntaxTheme';

export default class HighlightSyntax
{
	private readonly _code   : string                ;
	private readonly _lexer  : HTMLLexer             ;
	private readonly _theme  : HighlightTheme        ;
	private          _tokens : LexerToken[] = []     ;
	public           result  : string           = '' ;

	constructor (code: string, theme?: HighlightTheme) {
		this._code = code;
		this._theme = theme || defaultHighlightTheme;
		this._lexer = new HTMLLexer({
			write: (t: LexerToken) => this._tokens.push(t),
			end: () => null,
		});
		this._main();
	}

	private _main (): void {
		this._getTokens();
		this.result = this._tokens.map(el => this._colorizedToken(el)).join('');
	}

	private _getTokens (): void {
		this._lexer.write(this._code);
		this._lexer.end();
	}

	private _colorizedToken (token: LexerToken): string {
		const [type, data] = token;
		const colors = this._theme[type] || this._theme.default;
		return colors ? new ColorizedString([[data, ...colors]]).result : data;
	}
}