import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";
import { testDataValid } from "./data.test.ts";
import map from "./map.ts";

Deno.test("map test", () => {
	const c = map(
		(_v: string) => 5,
		testDataValid,
	);
	assertEquals(c, 5);
});
