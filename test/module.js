/**
 * test/test.js: sample test spec
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
import * as containers from '../src'

describe('Bahalu Module', () => {

  it('should be an Object', () => {
    expect(containers).toBeAn(Object)
  })

  describe('Either pattern Containers', () => {

    it('should include "right" container', () => {
      expect(Object.keys(containers)).toInclude('right')
      expect(containers.right).toBeAn(Function)
      expect(containers.right().constructor.name).toBe('Right')
    })

    it('should include "left" container', () => {
      expect(Object.keys(containers)).toInclude('left')
      expect(containers.left).toBeAn(Function)
      expect(containers.left().constructor.name).toBe('Left')
    })

  })

})
