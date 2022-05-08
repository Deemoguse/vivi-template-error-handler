import { HighlightTheme } from './highlightSyntaxTheme';
import { ListChars } from './listChars';
import { ParserError } from './parserError';

export interface DrawErrorTableOptions {
	template: string,
	error: ParserError,
	pathToFile: string,
	customChars?: ListChars,
	highlightTheme?: HighlightTheme,
	}