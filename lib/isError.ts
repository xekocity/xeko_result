import Result from "./types/Result.ts";

export default function isError<T>(result: Result<T>): result is Error {
	return (result instanceof Error);
}
