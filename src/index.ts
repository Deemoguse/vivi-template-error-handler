import DrawErrorTable from './utils/drawErrorTable';
import type { ArrowChars, ErrorTable, ListChars, ListCharsItems, PosChars } from './types/listChars';
import type { ColorizedDesc } from './types/colorizedDesc';
import type { DrawErrorTableOptions } from './types/drawErrorTableOptions';
import type { ErrorHandlerOptions } from './types/errorHandlerOptions';
import type { HighlightTheme, ThemeColors } from './types/highlightSyntaxTheme';
import type { LexerToken, LexerType } from './types/lexerToken';
import type { ParserError } from './types/parserError';

export default function viviTemplateErrorHandler (opts: ErrorHandlerOptions): string {
	opts.template = opts.template.trim();
	return new DrawErrorTable(opts).result;
}

export {
	ArrowChars,
	ColorizedDesc,
	DrawErrorTableOptions,
	ErrorHandlerOptions,
	ErrorTable,
	HighlightTheme,
	LexerToken,
	LexerType,
	ListChars,
	ListCharsItems,
	ParserError,
	PosChars,
	ThemeColors,
};
