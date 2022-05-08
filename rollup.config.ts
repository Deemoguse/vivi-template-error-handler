import { defineConfig } from 'rollup';
import cjs from '@rollup/plugin-commonjs';
import ts from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';

export default defineConfig([
	// Compile Typescript files.
	{
		input: 'src/index.ts',
		output: [
			{ file: packageJson.main, format: 'cjs', sourcemap: true, exports: 'default' },
			{ file: packageJson.module, format: 'esm', sourcemap: true, exports: 'default' },
		],
		plugins: [
			cjs(),
			ts(),
			terser()
		],
		external: [
			'colors',
		]
	},

	// Compile Decloration file.
	{
		input: 'src/index.ts',
		output: [
			{ file: 'dist/index.d.ts', format: 'esm' }
		],
		plugins: [ dts() ],
	}
]);