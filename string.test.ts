import { describe, expect, it } from "vitest";
import { assertString, isString } from "./string";

describe("string", () => {
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

	describe("assertString", () => {
		it.each([0, [], {}, null, undefined, true, false])("should throw type error %s", (value) => {
			expect(() => assertString(value)).toThrow(TypeError);
			expect(() => assertString(value)).toThrow(/Expected a string/);
		});

		it.each(["", "string"])("should not throw type error %s", (value) => {
			expect(() => assertString(value)).not.toThrow();
		});

		it("should throw custom error message", () => {
			const customMessage = "Custom error message";

			expect(() => assertString(123, customMessage)).toThrow(TypeError);
			expect(() => assertString(123, customMessage)).toThrow(customMessage);
		});
	});
});
