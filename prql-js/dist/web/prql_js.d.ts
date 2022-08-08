declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	* @param {string} s
	* @returns {CompileResult}
	*/
	export function compile(s: string): CompileResult;
	/**
	* @param {string} s
	* @returns {string | undefined}
	*/
	export function to_sql(s: string): string | undefined;
	/**
	* @param {string} s
	* @returns {string | undefined}
	*/
	export function to_json(s: string): string | undefined;
	/**
	* @param {string} s
	* @returns {string | undefined}
	*/
	export function from_json(s: string): string | undefined;
	/**
	*/
	export class CompileError {
	  free(): void;
	/**
	*/
	  readonly location: SourceLocation | undefined;
	/**
	*/
	  readonly message: string;
	}
	/**
	*/
	export class CompileResult {
	  free(): void;
	/**
	*/
	  readonly error: CompileError | undefined;
	/**
	*/
	  readonly sql: string | undefined;
	}
	/**
	*/
	export class SourceLocation {
	  free(): void;
	/**
	*/
	  end_column: number;
	/**
	*/
	  end_line: number;
	/**
	*/
	  start_column: number;
	/**
	*/
	  start_line: number;
	}
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly compile: (a: number, b: number) => number;
  readonly __wbg_compileresult_free: (a: number) => void;
  readonly compileresult_sql: (a: number, b: number) => void;
  readonly compileresult_error: (a: number) => number;
  readonly __wbg_compileerror_free: (a: number) => void;
  readonly compileerror_message: (a: number, b: number) => void;
  readonly compileerror_location: (a: number) => number;
  readonly __wbg_sourcelocation_free: (a: number) => void;
  readonly __wbg_get_sourcelocation_start_line: (a: number) => number;
  readonly __wbg_set_sourcelocation_start_line: (a: number, b: number) => void;
  readonly __wbg_get_sourcelocation_start_column: (a: number) => number;
  readonly __wbg_set_sourcelocation_start_column: (a: number, b: number) => void;
  readonly __wbg_get_sourcelocation_end_line: (a: number) => number;
  readonly __wbg_set_sourcelocation_end_line: (a: number, b: number) => void;
  readonly __wbg_get_sourcelocation_end_column: (a: number) => number;
  readonly __wbg_set_sourcelocation_end_column: (a: number, b: number) => void;
  readonly to_sql: (a: number, b: number, c: number) => void;
  readonly to_json: (a: number, b: number, c: number) => void;
  readonly from_json: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
