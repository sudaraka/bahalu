/**
 * src/prototypes/functor.js: prototype for basic functor
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import { extendPrototype } from '../utils'
import basePrototype from './base'

export default (value, wrapper) => extendPrototype(
  {
    'isFunctor': true,
    'map': (f, ...args) => wrapper(f(value, ...args))
  },

  basePrototype
)
