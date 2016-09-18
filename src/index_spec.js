/**
 * src/index_spec.js: tests for the main module
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
import * as containers from './index'

describe('Bahalu Module', () => {

  it('should be an Object', () => {
    expect(containers).toBeAn(Object)
  })

  it('should have container property', () => {
    expect(containers.container).toBeA(Function)
  })

  it('should have maybe property', () => {
    expect(containers.maybe).toBeA(Function)
  })

})
