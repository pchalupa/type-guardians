export function isNumber(value: unknown): value is string {
	return typeof value === 'number'
}
