/**
 * src/morphisms/base_spec.js: tests for base container morphism
 *
 * Copyleft 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import expect from 'expect.js'
import baseMorphism from './base'

describe('Morphism: Base', () => {

  it('should be an object', () => {
    expect(
      typeof baseMorphism()
    ).to.be('object')
  })

  it('should have isContainer property', () => {
    expect(
      Reflect.ownKeys(baseMorphism()).includes('isContainer')
    ).to.be(true)
  })

})
