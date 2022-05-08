import listChars from './defaultListChars';
import type { PosChars } from '../types/listChars';
import ColorizedString from './colorizedString';

export default class DrawPosLabel
{
	private readonly _LN    : number      ;
	private readonly _СN    : number      ;
	private readonly _chars : PosChars    ;
	public           lenght : number = 0  ;
	public           result : string = '' ;

	constructor (LN: number, CN: number, customChar?: PosChars) {
		this._LN = LN;
		this._СN = CN;
		this._chars = customChar || {
			posBlockOpen: listChars.posBlockOpen,
			posBlockLineNumber: listChars.posBlockLineNumber,
			posBlockColumnNumber: listChars.posBlockColumnNumber,
			posBlockClose: listChars.posBlockClose,
		};
		this._main();
	}

	private _main (): void {
		this._defineLength();
		this._drawPosLabel();
	}

	private _drawPosLabel (): void {
		this.result = new ColorizedString([
			[this._chars.posBlockOpen, 'gray'],
			[this._chars.posBlockLineNumber + ':', 'gray'],
			[' '],
			[this._LN, 'yellow'],
			[', ', 'gray'],
			[this._chars.posBlockColumnNumber + ':', 'gray'],
			[' '],
			[this._СN, 'yellow'],
			[this._chars.posBlockClose, 'gray'],
		]).result;
	}

	private _defineLength (): void {
		const chars = [
			this._chars.posBlockColumnNumber,
			this._chars.posBlockLineNumber,
			this._chars.posBlockOpen,
			this._chars.posBlockClose,
			this._LN,
			this._СN,
			':',
			' ',
			', ',
			':',
			' ',
		];
		this.lenght = chars.reduce<number>((p, c) => p + c.toString().length, 0);
	}
}