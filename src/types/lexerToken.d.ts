export type LexerType =
	| 'attributeAssign'
	| 'attributeName'
	| 'attributeValueData'
	| 'attributeValueEnd'
	| 'attributeValueStart'
	| 'bogusCharRef'
	| 'charRefDecimal'
	| 'charRefHex'
	| 'charRefLegacy'
	| 'charRefNamed'
	| 'commentData'
	| 'commentEnd'
	| 'commentEndBogus'
	| 'commentStart'
	| 'commentStartBogus'
	| 'data'
	| 'endTagPrefix'
	| 'endTagStart'
	| 'lessThanSign'
	| 'plaintext'
	| 'rawtext'
	| 'rcdata'
	| 'tagSpace'
	| 'startTagStart'
	| 'tagEnd'
	| 'tagEndAutoclose'
	| 'tagName'
	;

export type LexerToken =
	| [ LexerType, string, string? ]
	;