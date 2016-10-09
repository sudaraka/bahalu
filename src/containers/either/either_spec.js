/**
 * src/containers/either/either_spec.js: tests for either container
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

import either, { eitherOr } from './either'
import monad from '../../morphisms/monad'

describe('Container: either', () => {

  it('should be able to get contained value', () => {
    expect(either.of(42).chain(_ => _)).toBe(42)
  })

  it('should change contained value via map', () => {
    expect(either.of(42).map(v => v + 10).chain(_ => _)).toBe(52)
  })

  it('should be able to map a NULL', () => {
    const
      x = 'a',
      y = null

    expect(either.of(x).map(v => v.toUpperCase()).chain(_ => _)).toBe('A')
    expect(either.of(y).map(v => v.toUpperCase()).chain(_ => _)).toBe(null)
  })

  it('should be able to map an undefined', () => {
    const
      x = 'a'

    let
      y

    expect(either.of(x).map(v => v.toUpperCase()).chain(_ => _)).toBe('A')
    expect(either.of(y).map(v => v.toUpperCase()).chain(_ => _)).toBe(undefined) // eslint-disable-line no-undefined
  })

  it('should be able to handle map returning null', () => {

    // Without NULL map
    expect(
      either.of('bahalu')
        .map(v => v[0])
        .map(v => v.toUpperCase())
        .chain(_ => _)
    ).toBe('B')

    // With NULL map
    expect(
      either.of('bahalu')
        .map(v => v[0])
        .map(() => null)
        .map(v => v.toUpperCase())
        .chain(_ => _)
    ).toBe(null)
  })

  it('should be able to use a custom divert function', () => {
    const
      customDivert = value => 'bahalu!' === value

    // Without custom divert
    expect(
      either.of('bahalu')
        .map(v => `${v}!`)
        .map(v => v.toUpperCase())
        .chain(_ => _)
    ).toBe('BAHALU!')

    // With custom divert
    expect(
      either.of('bahalu', customDivert)
        .map(v => `${v}!`)
        .map(v => v.toUpperCase())
        .chain(_ => _)
    ).toBe('bahalu!')
  })

  it('should be able to use a custom diverted container', () => {
    const
      customContainer = () => () => monad('FIXED VALUE', customContainer)

    // Without NULL map
    expect(
      eitherOr(customContainer).of('bahalu')
        .map(v => v[0])
        .map(v => v.toUpperCase())
        .chain(_ => _)
    ).toBe('B')

    // With NULL map
    expect(
      eitherOr(customContainer).of('bahalu')
        .map(v => v[0])
        .map(() => null)
        .map(v => v.toLowerCase())
        .chain(_ => _)
    ).toBe('FIXED VALUE')

  })
})
