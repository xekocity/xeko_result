import isOk from "./isOk.ts";
import Result from "./types/Result.ts";

export default function map<T, U>(
	fn: (x: T) => U,
	result: Result<T>,
): Result<U> {
	return isOk(result) ? fn(result) : result
}
