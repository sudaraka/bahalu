/**
 * src/test_helpers.js: helper function for unit tests
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import expect from 'expect'

export const
  // Tests if given (morphism) object confirms to functor definition
  isFunctor = morphism => {

    describe('Is functor ?', () => {

      it('should be an object', () => {
        expect(morphism).toBeAn(Object)
      })

      it('should have isFunctor property', () => {
        expect(
          Reflect.ownKeys(morphism).includes('isFunctor')
        ).toBe(true)
      })

      it('should have a map() function', () => {
        expect(morphism.map).toBeAn(Function)
      })

    })

  }
