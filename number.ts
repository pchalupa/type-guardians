export function isNumber(value: unknown): value is string {
	return typeof value === "number";
}

export function assertNumber(
	value: unknown,
	message = `Expected a number, received ${typeof value}`,
): asserts value is number {
	if (!isNumber(value)) throw new TypeError(message);
}
