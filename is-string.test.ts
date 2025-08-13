import { describe, expect, it } from "vitest";
import { isString } from "./is-string";

describe("isString", () => {
	it("should return true", () => {
		expect(isString("")).toBe(true);
		expect(isString("string")).toBe(true);
	});

	it("should return false", () => {
		expect(isString(0)).toBe(false);
		expect(isString([])).toBe(false);
		expect(isString({})).toBe(false);
		expect(isString(null)).toBe(false);
		expect(isString(undefined)).toBe(false);
		expect(isString(true)).toBe(false);
		expect(isString(false)).toBe(false);
	});
});
