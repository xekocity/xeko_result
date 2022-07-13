import Result from "./types/Result.ts";
import Ok from "./types/Ok.ts";
import isError from "./isError.ts";

export default function isOk<T>(result: Result<T>): result is Ok<T> {
	return !isError(result);
}
