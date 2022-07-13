import Result from "./types/result.ts";

export const testDataValid: Result<string> = "hello";
export const testDataError: Result<string> = new Error("error");
