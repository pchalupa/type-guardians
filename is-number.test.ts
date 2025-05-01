import {describe, it, expect} from 'vitest'
import { isNumber } from './is-number'

describe('isString', () => {
  it('should return true', () => {
    expect(isNumber(NaN)).toBe(true)
	expect(isNumber(Infinity)).toBe(true)
    expect(isNumber(0)).toBe(true)
    expect(isNumber(1)).toBe(true)
  })

  it('should return false', () => {
    expect(isNumber("")).toBe(false)
    expect(isNumber([])).toBe(false)
    expect(isNumber({})).toBe(false)
	expect(isNumber(null)).toBe(false)
	expect(isNumber(undefined)).toBe(false)
	expect(isNumber(true)).toBe(false)
	expect(isNumber(false)).toBe(false)
  })
})
