import { Color } from 'colors';

export type ColorizedDesc =
	| [string | number, ...(keyof Color)[]]
	;
