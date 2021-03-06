/**
 * src/morphisms/functor_spec.js: tests for functor morphism
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
import functorMorphism from './functor'
import baseMorphism from './base'

import { isFunctor } from '../test_helpers'

describe('Morphism: Functor', () => {

  it('should be a function', () => {
    expect(functorMorphism).toBeA(Function)
  })

  it('should extend base container morphism', () => {
    expect(Reflect.getPrototypeOf(functorMorphism())).toEqual(baseMorphism())
    expect(functorMorphism().isContainer).toBe(true)
  })

  isFunctor(functorMorphism())

})
