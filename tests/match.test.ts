import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import match from "../lib/match.ts";
import { testDataValid } from "./data.test.ts";

Deno.test("result test", () => {
	match((v: string) => {
		assertEquals(v, "hello");
	}, (_e: Error) => {
		assertEquals(true, true);
	}, testDataValid);
});
