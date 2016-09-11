/**
 * src/containers/container/container_spec.js: tests for basic container
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

import container from './container'

describe('Container: container', () => {

  it('should be able to get contained value', () => {
    expect(container.of(42).chain(_ => _)).toBe(42)
  })

  it('should change contained value via map', () => {
    expect(container.of(42).map(v => v + 10).chain(_ => _)).toBe(52)
  })

})
