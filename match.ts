import Result from "./types/result.ts";
import isOk from "./isOk.ts";

export default function match<T, U>(
	vn: (value: T) => U,
	ve: (error: Error) => U,
	result: Result<T>,
): U {
	return isOk(result) ? vn(result) : ve(result)
}
