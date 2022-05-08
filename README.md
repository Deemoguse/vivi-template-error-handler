![vivi-template](img/logo.png)

* * * * * *

# Vivi-Template: error-handler
HTML syntax error handler for `vivi-template-tree-builder`.

## Interfaces
The `ParserError`, `HighlightTheme` and `ListChars` types will be described below.
```ts
function viviTemplateErrorHandler (
   opts: {
      tmp: string,
      error: ParserError,
      pathToFile: string,
      highlightTheme?: HighlightTheme,
      listChars?: ListChars,
   }
): string
```

### Required parameters
| option       | description
|:-------------|:-----------
| `tmp`        | A string with a fragment of the vivi template.
| `error`      | An object with a description of the type of error its position in the fragment.
| `pathToFile` | The path to the file where the error was detected.

### Optional parameters
| option           | description
|:-----------------|:-----------
| `highlightTheme` | Defining colors for syntax highlighting.
| `listChars`      | Defining symbols for compiling the error table.

### Description of types
```ts
type ParserError = {
   code: string
   startCol: number,
   endCol: number,
   startLine: number,
   endLine: number,
   startOffset: number,
   endOffset: number,
   };
```

```ts
/**
 * Key – token type.
 * Value – description of the token color.
 * See https://github.com/Marak/colors.js
 **/
type HighlightTheme = {
   attributeAssign?: string[]
   attributeName?: string[]
   attributeValueData?: string[]
   attributeValueEnd?: string[]
   attributeValueStart?: string[]
   bogusCharRef?: string[]
   charRefDecimal?: string[]
   charRefHex?: string[]
   charRefLegacy?: string[]
   charRefNamed?: string[]
   commentData?: string[]
   commentEnd?: string[]
   commentEndBogus?: string[]
   commentStart?: string[]
   commentStartBogus?: string[]
   data?: string[]
   endTagPrefix?: string[]
   endTagStart?: string[]
   lessThanSign?: string[]
   plaintext?: string[]
   rawtext?: string[]
   rcdata?: string[]
   tagSpace?: string[]
   startTagStart?: string[]
   tagEnd?: string[]
   tagEndAutoclose?: string[]
   tagName?: string[]
   };
```

```ts
type ListChars = {
   arrowLine?: string,
   arrowPointer?: string,
   posBlockOpen?: string,
   posBlockLineNumber?: string,
   posBlockColumnNumber?: string,
   posBlockClose?: string,
   lineNumberBorder?: string,
   lineNumberVoid?: string,
   lineNumberVoidBorder?: string,
   };
```