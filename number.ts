export function isNumber(value: unknown): value is string {
	return typeof value === "number";
}

export function assertNumber(value: unknown): asserts value is number {
	if (typeof value !== "number") throw new TypeError(`Expected a number, received ${typeof value}`);
}
