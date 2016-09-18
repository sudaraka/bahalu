/**
 * src/utild_spec.js: tests for utility functions
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import expect from 'expect'
import { extendMorphism } from './utils'

describe('Utilities', () => {

  describe('extendMorphism()', () => {

    it('should attach correct prototype', () => {
      const
        proto1 = () => ({ 'prototype_field': 42 }),
        proto2 = () => ({ 'prototype_field': 43 }),
        obj = extendMorphism({}, proto1())

      expect(Reflect.getPrototypeOf(obj)).toEqual(proto1())
      expect(Reflect.getPrototypeOf(obj)).toNotEqual(proto2())
    })

  })

})
