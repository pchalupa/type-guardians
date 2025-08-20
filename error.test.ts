import { describe, expect, it } from "vitest";
import { assertError, isError } from "./error";

describe("error", () => {
	describe("isError", () => {
		it("should return true", () => {
			expect(isError(new Error())).toBe(true);
		});

		it("should return false", () => {
			expect(isError(0)).toBe(false);
			expect(isError("")).toBe(false);
			expect(isError([])).toBe(false);
			expect(isError({})).toBe(false);
			expect(isError(null)).toBe(false);
			expect(isError(undefined)).toBe(false);
			expect(isError(true)).toBe(false);
			expect(isError(false)).toBe(false);
		});

		describe("assertError", () => {
			it.each([1, "", [], {}, null, undefined, true, false])("should throw type error %s", (value) => {
				expect(() => assertError(value)).toThrow(TypeError);
				expect(() => assertError(value)).toThrow(/Expected an error/);
			});

			it.each([new Error()])("should not throw type error %s", (value) => {
				expect(() => assertError(value)).not.toThrow();
			});

			it("should throw custom error message", () => {
				const customMessage = "Custom error message";

				expect(() => assertError("123", customMessage)).toThrow(TypeError);
				expect(() => assertError("123", customMessage)).toThrow(customMessage);
			});
		});
	});
});
