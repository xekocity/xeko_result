import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { testDataError, testDataValid } from "./data.test.ts";
import isError from "./isError.ts";

Deno.test("isOk test", () => {
	assertEquals(isError(testDataValid), false);
	assertEquals(isError(testDataError), true);
});
