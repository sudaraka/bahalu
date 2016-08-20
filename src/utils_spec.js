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
import { freeze, extendPrototype } from './utils'

describe('Utilities', () => {

  describe('freeze()', () => {

    it('should freeze simple object', () => {
      const
        obj = freeze({})

      expect(Object.isFrozen(obj)).toBe(true)
    })

    it('should freeze object property (value)', () => {
      const
        obj = freeze({ 'prop': 42 })

      expect(Object.isFrozen(obj.prop)).toBe(true)
    })

    it('should freeze object nested object', () => {
      const
        obj1 = freeze({ 'prop': {} }),
        obj2 = freeze({ 'prop1': { 'prop2': {} } })

      expect(Object.isFrozen(obj1.prop)).toBe(true)
      expect(Object.isFrozen(obj2.prop1.prop2)).toBe(true)
    })

    it('should freeze object method', () => {
      const
        obj = freeze({ 'func': () => 42 })

      expect(Object.isFrozen(obj.func)).toBe(true)
    })

  })


  describe('extendPrototype()', () => {

    it('should attach correct prototype', () => {
      const
        proto1 = () => ({ 'prototype_field': 42 }),
        proto2 = () => ({ 'prototype_field': 43 }),
        obj = extendPrototype({}, proto1)

      expect(Reflect.getPrototypeOf(obj)).toEqual(proto1())
      expect(Reflect.getPrototypeOf(obj)).toNotEqual(proto2())
    })

    it('should return object with immutable prototype', () => {
      const
        proto = () => ({ 'prototype_field': 42 }),
        obj = extendPrototype({}, proto)

      expect(
        () => {
          obj.prototype_field = 0
        }
      ).toThrow(TypeError)
    })

    it('should return immutable object', () => {
      const
        prop = { 'property_field': 42 },
        obj = extendPrototype(prop, () => ({}))

      expect(
        () => {
          obj.property_field = 0
        }
      ).toThrow(TypeError)
    })

  })

})
