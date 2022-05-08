import defaultListChars from './defaultListChars';
import HighlightSyntax from './highlightSyntax';
import ColorizedString from './colorizedString';
import DrawPosLabel from './drawPosLabel';
import DrawMessage from './drawMessage';
import DrawArrow from './drawArrow';
import defaultHighlightTheme from './defaultHighlightTheme';
import type { ColorizedDesc } from '../types/colorizedDesc';
import type { ListChars } from '../types/listChars';
import type { HighlightTheme } from '../types/highlightSyntaxTheme';
import type { DrawErrorTableOptions } from '../types/drawErrorTableOptions';
import type { ParserError } from '../types/parserError';

export default class DrawErrorTable
{
	private readonly _template       : string                          ;
	private readonly _err            : ParserError                     ;
	private readonly _pathToFile     : string                          ;
	private readonly _chars          : ListChars                       ;
	private readonly _theme          : HighlightTheme                  ;
	private          _maxLNCharCount : number                          ;
	private          _lines          : [number | false, string][] = [] ;
	public           result          : string                     = '' ;

	constructor (opts: DrawErrorTableOptions) {
		this._template = opts.template.trim();
		this._err = opts.error;
		this._pathToFile = opts.pathToFile;
		this._chars = { ...defaultListChars, ...opts.customChars };
		this._theme = defaultHighlightTheme || opts.highlightTheme;
		this._main();
	}

	private _main (): void {
		this._decostructTmp();
		this._replaceTabToSpace();
		this._defineMaxLNCharCount();
		this._injectErrorLabel();
		this._focusOnError();
		this._constructErrorTable();
	}

	private _decostructTmp (): void {
		this._lines = this._template.split(/[\n\r]/g).map((el, id) => [id + 1, el]);
	}

	private _replaceTabToSpace (): void {
		this._lines = this._lines.map(el => [el[0], el[1].replace('\t', '    ')])
	}

	private _defineMaxLNCharCount (): void {
		const maxLNCharCount = this._lines.length.toString().length;
		this._maxLNCharCount = maxLNCharCount <= 2 ? 2 : maxLNCharCount;
	}

	private _injectErrorLabel (): void {
		const errorMessage = new DrawMessage(this._err.code);
		const errorPos = new DrawPosLabel(this._err.startLine, this._err.startCol, {
			posBlockOpen: this._chars.posBlockOpen,
			posBlockClose: this._chars.posBlockClose,
			posBlockLineNumber: this._chars.posBlockLineNumber,
			posBlockColumnNumber: this._chars.posBlockColumnNumber,
		});
		const errorArrow = new DrawArrow(errorMessage.length + errorPos.lenght + 1, this._err.startCol, {
			arrowLine: this._chars.arrowLine,
			arrowPointer: this._chars.arrowPointer,
		});

		this._lines.splice(this._err.startLine, 0,
			[false, errorArrow.result],
			[false, errorPos.result + ' ' + errorMessage.result],
			[false, ''],
		);
	}

	private _focusOnError (): void {
		const { startLine } = this._err;
		const startPos = startLine - 4 < 1 ? 0 : startLine - 4;
		const endPos = startLine + 6 > this._lines.length ? this._lines.length : startLine + 6;
		this._lines = this._lines.slice(startPos, endPos);
	}

	private _constructErrorTable (): void {
		const lines = this._lines.map(el => {
			const [order, data] = el;
			const LN: ColorizedDesc = order
				? [this._getLN(order), 'gray', 'dim']
				: [this._chars.lineNumberVoid.toString().repeat(this._maxLNCharCount), 'gray', 'dim'];
			const beforeBorder: ColorizedDesc = order
				? [' ']
				: [this._chars.lineNumberVoid, 'gray', 'dim'];
			const border: ColorizedDesc = order
				? [this._chars.lineNumberBorder, 'gray']
				: [this._chars.lineNumberVoidBorder, 'gray', 'dim'];
			const afterBorder: ColorizedDesc = [' '];
			const tableData = order
				? new HighlightSyntax(data, this._theme).result
				: data;

			return new ColorizedString([LN, beforeBorder, border, afterBorder, [tableData]]).result;
		});
		this.result = '\n' + this._getPathToFile() + '\n\n' + lines.join('\n') + '\n';
	}

	private _getPathToFile (): string {
		return new ColorizedString([[`> Error in ${this._pathToFile}`, 'red']]).result;
	}

	private _getLN (LN: number): string {
		const placeholderCount = this._maxLNCharCount - LN.toString().length;
		return '0'.repeat(placeholderCount) + LN.toString()
	}
}