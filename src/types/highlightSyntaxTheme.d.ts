import { Color } from 'colors';
import { LexerType } from './lexerToken';

export type ThemeColors = (keyof Color)[];

export type HighlightTheme =
	| { [K in LexerType]?: ThemeColors }
	& { default?: ThemeColors }
	;