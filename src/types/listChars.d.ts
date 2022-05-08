type ListCharsConstructor<T extends string> =
	| { [K in T]: string | number }
	;

export type ListCharsItems =
	| 'arrowLine'
	| 'arrowPointer'
	| 'posBlockOpen'
	| 'posBlockLineNumber'
	| 'posBlockColumnNumber'
	| 'posBlockClose'
	| 'lineNumberBorder'
	| 'lineNumberVoid'
	| 'lineNumberVoidBorder'
	;

export type ArrowChars =
	| Pick<ListChars, 'arrowLine' | 'arrowPointer'>
	;

export type PosChars =
	| Pick<ListChars, | 'posBlockOpen' | 'posBlockLineNumber' | 'posBlockColumnNumber' | 'posBlockClose'>
	;

export type ErrorTable =
	| Pick<ListChars, 'lineNumberBorder' | 'lineNumberVoid' | 'lineNumberVoidBorder'>
	;

export type ListChars =
	| ListCharsConstructor<ListCharsItems>
	;