/**
 * test/test.js: sample test spec
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import expect from 'expect';
import { is_functor } from './helpers';
import { container } from '../src';

describe('Basic Container', () => {

  is_functor(container);

  it('map() method should receive contained value', () => {
    container(42).map(val => {
      expect(val).toBe(42);
    });
  });

  it('map() method should return a container', () => {
    const
      container_a = container(42),
      container_b = container_a.map(val => {
        return val + 1;
      });

    is_functor(container_b);

    container_b.map(val => {
      expect(val).toBe(43);
    });
  });

});
