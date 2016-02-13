/**
 * test/containers/either_right.js: tests for Right of Either container pattern
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
import { is_functor } from '../helpers'
import { right } from '../../src'

describe('Either.right Container', () => {

  is_functor(right)

  describe('map() method', () => {

    it('should receive contained value', () => {
      right(42).map(val => {
        expect(val).toBe(42)
      })
    })

    it('should return a container', () => {
      const
        container_a = right(42),
        container_b = container_a.map(val => val + 1)

      is_functor(container_b)

      container_b.map(val => {
        expect(val).toBe(43)
      })
    })

    it('should return same container when mapped with non function', () => {
      const
        container_a = right(42),
        container_b = container_a.map(),
        container_c = container_a.map(1),
        container_d = container_a.map('not a function'),
        container_e = container_a.map({})

      expect(container_b).toBe(container_a,
          'map with undefined returned a new container')
      expect(container_c).toBe(container_a,
          'map with number returned a new container')
      expect(container_d).toBe(container_a,
          'map with string returned a new container')
      expect(container_e).toBe(container_a,
          'map with object returned a new container')
    })

  })

  describe('Immutability', () => {

    it('should not mutate the original container', () => {
      const
        container_a = right({ 'answer': 42 })

      container_a.map(val => {
        expect(() => {
          val.answer += 1
        }).toThrow(TypeError)

        return val
      })

      container_a.map(val => {
        expect(val.answer).toBe(42)
      })
    })

  })

})
