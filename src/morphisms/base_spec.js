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

import expect from 'expect'
import baseMorphism, { morphismFactory } from './base'

describe('Morphism: Base', () => {

  it('should be an object', () => {
    expect(
      typeof baseMorphism()
    ).toBe('object')
  })

  it('should have isContainer property', () => {
    expect(
      Reflect.ownKeys(baseMorphism()).includes('isContainer')
    ).toBe(true)
  })

  describe('morphismFactory()', () => {

    it('should be a function', () => {
      expect(morphismFactory).toBeA(Function)
    })

    it('should return a function', () => {
      expect(morphismFactory({})).toBeA(Function)
    })

    it('should call given wrapper function', () => {
      const
        spyTarget = { 'wrapper': _ => _ },
        spy = expect.spyOn(spyTarget, 'wrapper')

      morphismFactory({ 'wrapper': spyTarget.wrapper })(_ => _)

      expect(spy).toHaveBeenCalled()
    })

    it('should call given divert function', () => {
      const
        spyTarget = { 'divert': _ => _ },
        spy = expect.spyOn(spyTarget, 'divert')

      morphismFactory({ 'divert': spyTarget.divert })(_ => _)

      expect(spy).toHaveBeenCalled()
    })

    it('should call given function when divert return false', () => {
      const
        divert = () => false,
        spyTarget = { 'f': _ => _ },
        spy = expect.spyOn(spyTarget, 'f')

      morphismFactory({ divert })(spyTarget.f)

      expect(spy).toHaveBeenCalled()
    })

    it('should not call given function when divert return true', () => {
      const
        divert = () => true,
        spyTarget = { 'f': _ => _ },
        spy = expect.spyOn(spyTarget, 'f')

      morphismFactory({ divert })(spyTarget.f)

      expect(spy).toNotHaveBeenCalled()
    })

  })

})
