import listChars from './defaultListChars';
import ColorizedString from './colorizedString';
import type { ArrowChars } from '../types/listChars';

export default class DrawArrow
{
	private readonly _lenght     : number      ;
	private readonly _posPointer : number      ;
	private readonly _chars      : ArrowChars  ;
	public           result      : string = '' ;

	constructor (lenght: number, posPointer: number, customChars?: ArrowChars) {
		this._lenght = lenght > posPointer ? lenght : posPointer;
		this._posPointer = posPointer - 1;
		this._chars = customChars || {
			arrowLine: listChars.arrowLine,
			arrowPointer: listChars.arrowPointer,
		};
		this._main();
	}

	private _main (): void {
		this._drawArrow();
	}

	private _drawArrow (): void {
		for (let i = 0; i < this._lenght; i++)
			this.result += i === this._posPointer
				? this._chars.arrowPointer
				: this._chars.arrowLine;

		this.result = new ColorizedString([[this.result, 'red']]).result;
	}
}