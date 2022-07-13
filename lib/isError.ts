import Result from "./types/result.ts";

export default function isError<T>(result: Result<T>): result is Error {
	return (result instanceof Error);
}
