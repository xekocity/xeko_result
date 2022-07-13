import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import unwrapOr from "../lib/unwrapOr.ts";

Deno.test("unwrapOr test", () => {
	assertEquals(
		unwrapOr(5, new Error("not a number")),
		5,
	);
});
