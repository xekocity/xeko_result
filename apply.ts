import Result from "./types/result.ts";
import isOk from "./isOk.ts";

export default function apply<T>(
	fn: (value: T) => void, 
	result: Result<T>,
): void {
	if (isOk(result)) {
        fn(result);
    }
}
