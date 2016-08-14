/**
 * src/prototypes/base_spec.js: tests for container prototype
 *
 * Copyleft 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import expect from 'expect'
import basePrototype from './base'

describe('Container Prototype', () => {

  it('should be an object', () => {
    expect(
      typeof basePrototype()
    ).toBe('object')
  })

  it('should no be mutable', () => {
    expect(
      () => {
        basePrototype().newThing = 0
      }
    ).toThrow(TypeError)
  })

  it('should have isContainer property', () => {
    expect(
      Reflect.ownKeys(basePrototype()).includes('isContainer')
    ).toBe(true)
  })

  it('should not mutate isContainer property', () => {
    expect(
      () => {
        basePrototype().isContainer = false
      }
    ).toThrow(TypeError)

    expect(
      Reflect.deleteProperty(basePrototype(), 'isContainer')
    ).toBe(false)
  })

})
