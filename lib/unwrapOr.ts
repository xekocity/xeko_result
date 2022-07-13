import Result from "./types/result.ts";
import isOk from "./isOk.ts";

export default function unwrapOr<T, U>(result: Result<T>, u: U): T | U {
	return isOk(result) ? result : u
}
