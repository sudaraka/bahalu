/**
 * src/prototypes/functor_spec.js: tests for functor prototype
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
import functorPrototype from './functor'
import basePrototype from './base'

import { isFunctor } from '../test_helpers'

describe('Prototype: Functor', () => {

  it('should be a function', () => {
    expect(functorPrototype).toBeA(Function)
  })

  it('should have container prototype', () => {
    expect(Reflect.getPrototypeOf(functorPrototype())).toEqual(basePrototype())
    expect(functorPrototype().isContainer).toBe(true)
  })

  isFunctor(functorPrototype())

})
