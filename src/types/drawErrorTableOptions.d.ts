import { ParserError } from 'parse5';
import { HighlightTheme } from './highlightSyntaxTheme';
import { ListChars } from './listChars';

export interface DrawErrorTableOptions {
	template: string,
	error: ParserError,
	pathToFile: string,
	customChars?: ListChars,
	highlightTheme?: HighlightTheme,
	}