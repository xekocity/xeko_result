import Result from './types/Result.ts';

export default function toResult<T>(
	{ value, error }: { value: T | null | undefined; error: Error },
): Result<T> {
	return (value === null || value === undefined) ? error : value;
}
