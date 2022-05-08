import colors from 'colors';
import type { ColorizedDesc } from '../types/colorizedDesc';

export default class ColorizedString
{
	private readonly _desc  : ColorizedDesc[]      ;
	public           result : string          = '' ;
	public           length : number          = 0  ;

	constructor (desc: ColorizedDesc[]) {
		this._desc = desc;
		this._main();
	}

	private _main (): void {
		this.result = this._desc.reduce((p, c) => p + this._applyColor(c), this.result);
		this._defineStringLenght();
	}

	private _applyColor (desc: ColorizedDesc): string {
		const [text, ...colorizedDesc] = desc;
		return colorizedDesc.reduce((p, c) => colors[c](p.toString()), text).toString();
	}

	private _defineStringLenght (): void {
		this.length = this._desc.reduce((p, c) => p + c[0].toString().length, 0);
	}
}