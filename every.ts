import isError from "./isError.ts";
import Result from "./types/result.ts";

export default function every<T>(values: Array<Result<T>>): Result<Array<T>> {
  let error: Error | undefined;
  for (const value of values) {
    if (isError(value)) {
      error = value;
      break;
    }
  }
  return error === undefined ? values as Result<Array<T>> : error;
}
