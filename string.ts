export function isString(value: unknown): value is string {
	return typeof value === "string";
}

export function assertString(value: unknown): asserts value is string {
	if (typeof value !== "string") throw new TypeError(`Expected a string, received ${typeof value}`);
}
