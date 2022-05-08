import { HighlightTheme } from './highlightSyntaxTheme';
import { ListChars } from './listChars';
import { ParserError } from './parserError';

export interface ErrorHandlerOptions {
	template: string,
	error: ParserError,
	pathToFile: string,
	highlightTheme?: HighlightTheme,
	listChars?: ListChars,
	}