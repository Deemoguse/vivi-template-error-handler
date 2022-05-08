import DrawErrorTable from './utils/drawErrorTable';
import type { ErrorHandlerOptions } from './types/errorHandlerOptions';
import type * as ColorDesc from './types/colorizedDesc';
import type * as DrawErrorTableOptions from './types/drawErrorTableOptions';
import type * as HighlightSyntaxTheme from './types/highlightSyntaxTheme';
import type * as LexerToken from './types/lexerToken';
import type * as ListChars from './types/listChars';
import type * as ParserError from './types/parserError';

export default function viviTemplateErrorHandler (opts: ErrorHandlerOptions): string {
	opts.template = opts.template.trim();
	return new DrawErrorTable(opts).result;
}

export {
	ErrorHandlerOptions,
	ColorDesc,
	DrawErrorTableOptions,
	HighlightSyntaxTheme,
	LexerToken,
	ListChars,
	ParserError
};
