export function isError(value: unknown): value is Error {
	return value instanceof Error;
}

export function assertError(
	value: unknown,
	message = `Expected an error, received ${typeof value}`,
): asserts value is string {
	if (!isError(value)) throw new TypeError(message);
}
