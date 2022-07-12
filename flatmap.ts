import isOk from "./isOk.ts";
import Result from "./types/result.ts";

export default function flatmap<T, U>(fn: (result: T) => Result<U>, result: Result<T>): Result<U> {
	return isOk(result) ? fn(result) : result
}
