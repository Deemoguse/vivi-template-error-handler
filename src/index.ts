import DrawErrorTable from './utils/drawErrorTable';
import type { ErrorHandlerOptions } from './types/errorHandlerOptions';

export default function viviTemplateErrorHandler (opts: ErrorHandlerOptions): string {
	opts.template = opts.template.trim();
	return new DrawErrorTable(opts).result;
}

export { ErrorHandlerOptions };
