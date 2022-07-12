import Result from "./types/result.ts";
import isOk from "./isOk.ts";

export default function toValue<T>(result: Result<T>): T | undefined {
  return isOk(result) ? result : undefined
}
