import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { testDataError, testDataValid } from "./data.test.ts";
import isOk from "../lib/isOk.ts";

Deno.test("isError test", () => {
	assertEquals(isOk(testDataValid), true);
	assertEquals(isOk(testDataError), false);
});

