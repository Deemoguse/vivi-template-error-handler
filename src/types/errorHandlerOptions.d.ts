import { ParserError } from 'parse5';
import { HighlightTheme } from './highlightSyntaxTheme';
import { ListChars } from './listChars';

export interface ErrorHandlerOptions {
	template: string,
	error: ParserError,
	pathToFile: string,
	highlightTheme?: HighlightTheme,
	listChars?: ListChars,
	}