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
