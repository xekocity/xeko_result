import Result from "../lib/types/Result.ts";

export const testDataValid: Result<string> = "hello";
export const testDataError: Result<string> = new Error("error");
