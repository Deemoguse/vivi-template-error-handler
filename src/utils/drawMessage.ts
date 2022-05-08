import capitalizer from 'capitalizer';
import ColorizedString from './colorizedString';

export default class DrawMessage
{
	private readonly _message : string ;
	private readonly _char    : string ;
	public           length   : number ;
	public           result   : string ;

	constructor (message: string, char?: string) {
		this._message = message;
		this._char = char;
		this._main();
	}

	private _main (): void {
		const message = `Error: ${this._getNormalizerMessage()}${this._char ? ` – '${this._char}'` : ''}.`;
		this.length = message.length;
		this.result = new ColorizedString([[message, 'red']]).result;
	}

	private _getNormalizerMessage (): string {
		const normalizerMessage = this._message.split('-').join(' ');
		return capitalizer(normalizerMessage) as string;
	}
}