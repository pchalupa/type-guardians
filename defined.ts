export function isDefined<Value>(value: Value): value is NonNullable<Value> {
	return value !== undefined && value !== null;
}

export function assertDefined<Value>(
	value: Value,
	message = "Expected a defined value, received undefined or null",
): asserts value is NonNullable<Value> {
	if (!isDefined(value)) throw new TypeError(message);
}
