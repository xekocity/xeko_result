import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import toResult from "./toResult.ts";

Deno.test("toResult test", () => {
	assertEquals(
		typeof toResult({ value: 5, error: new Error("not a number") }),
		"number",
	);
});
