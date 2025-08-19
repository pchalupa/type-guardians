import { describe, expect, it } from "vitest";
import { assertNumber, isNumber } from "./number";

describe("number", () => {
	describe("isuUmber", () => {
		it("should return true", () => {
			expect(isNumber(NaN)).toBe(true);
			expect(isNumber(Infinity)).toBe(true);
			expect(isNumber(0)).toBe(true);
			expect(isNumber(1)).toBe(true);
		});

		it("should return false", () => {
			expect(isNumber("")).toBe(false);
			expect(isNumber([])).toBe(false);
			expect(isNumber({})).toBe(false);
			expect(isNumber(null)).toBe(false);
			expect(isNumber(undefined)).toBe(false);
			expect(isNumber(true)).toBe(false);
			expect(isNumber(false)).toBe(false);
		});

		describe("assertNumber", () => {
			it.each(["", [], {}, null, undefined, true, false])("should throw type error %s", (value) => {
				expect(() => assertNumber(value)).toThrow(TypeError);
				expect(() => assertNumber(value)).toThrow(/Expected a number/);
			});

			it.each([0, NaN, Infinity])("should not throw type error %s", (value) => {
				expect(() => assertNumber(value)).not.toThrow();
			});

			it("should throw custom error message", () => {
				const customMessage = "Custom error message";

				expect(() => assertNumber("123", customMessage)).toThrow(TypeError);
				expect(() => assertNumber("123", customMessage)).toThrow(customMessage);
			});
		});
	});
});
