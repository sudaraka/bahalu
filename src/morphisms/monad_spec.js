/**
 * src/morphisms/functor_spec.js: tests for monad morphism
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
import monadMorphism from './monad'

import { isMonad } from '../test_helpers'

describe('Morphism: Monad', () => {

  it('should be a function', () => {
    expect(monadMorphism).toBeA(Function)
  })

  isMonad(monadMorphism())

})
