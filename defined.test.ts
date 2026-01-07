import { describe, expect, it } from "vitest";
import { assertDefined, isDefined } from "./defined";

describe("isDefined", () => {
	it("should return true for defined values", () => {
		expect(isDefined(0)).toBe(true);
		expect(isDefined("")).toBe(true);
		expect(isDefined(false)).toBe(true);
		expect(isDefined([])).toBe(true);
		expect(isDefined({})).toBe(true);
	});

	it("should return false for undefined", () => {
		expect(isDefined(undefined)).toBe(false);
	});

	it("should return false for null", () => {
		expect(isDefined(null)).toBe(false);
	});

	it("should narrow type correctly", () => {
		const value: string | undefined = "test";
		if (isDefined(value)) {
			// Type should be narrowed to string
			const _typeCheck: string = value;
		}
	});
});

describe("assertDefined", () => {
	it("should not throw for defined values", () => {
		expect(() => assertDefined(0)).not.toThrow();
		expect(() => assertDefined("")).not.toThrow();
		expect(() => assertDefined(false)).not.toThrow();
		expect(() => assertDefined([])).not.toThrow();
		expect(() => assertDefined({})).not.toThrow();
	});

	it("should throw for undefined", () => {
		expect(() => assertDefined(undefined)).toThrow(TypeError);
		expect(() => assertDefined(undefined)).toThrow("Expected a defined value, received undefined or null");
	});

	it("should throw for null", () => {
		expect(() => assertDefined(null)).toThrow(TypeError);
		expect(() => assertDefined(null)).toThrow("Expected a defined value, received undefined or null");
	});

	it("should throw with custom message", () => {
		expect(() => assertDefined(undefined, "Custom error")).toThrow("Custom error");
	});

	it("should narrow type correctly", () => {
		const value: number | undefined = 42;
		assertDefined(value);
		// Type should be narrowed to number
		const _typeCheck: number = value;
	});
});
