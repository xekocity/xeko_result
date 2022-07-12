import Result from "./types/result.ts";
import Ok from "./types/Ok.ts";
import isError from "./isError.ts";

export default function isOk<T>(result: Result<T>): result is Ok<T> {
	return !isError(result);
}
