/**
 * src/containers/just/just_spec.js: tests for just container
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

import just from './just'

describe('Container: just', () => {

  it('should be able to get contained value', () => {
    expect(just.of(42).chain(_ => _)).toBe(42)
  })

  it('should NOT change contained value via map', () => {
    expect(just.of(42).map(v => v + 10).chain(_ => _)).toBe(42)
  })

  it('should be able to map a NULL', () => {
    const
      x = 'a',
      y = null

    expect(just.of(x).map(v => v.toUpperCase()).chain(_ => _)).toBe('a')
    expect(just.of(y).map(v => v.toUpperCase()).chain(_ => _)).toBe(null)
  })

  it('should be able to map an undefined', () => {
    const
      x = 'a'

    let
      y

    expect(just.of(x).map(v => v.toUpperCase()).chain(_ => _)).toBe('a')
    expect(just.of(y).map(v => v.toUpperCase()).chain(_ => _)).toBe(undefined) // eslint-disable-line no-undefined
  })

  it('should be able to handle map returning null', () => {

    // Without NULL map
    expect(
      just.of('bahalu')
        .map(v => v[0])
        .map(v => v.toUpperCase())
        .chain(_ => _)
    ).toBe('bahalu')

    // With NULL map
    expect(
      just.of('bahalu')
        .map(v => v[0])
        .map(() => null)
        .map(v => v.toUpperCase())
        .chain(_ => _)
    ).toBe('bahalu')
  })
})
