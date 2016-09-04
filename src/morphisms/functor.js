/**
 * src/morphisms/functor.js: morphism for basic functor
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import { extendMorphism } from '../utils'
import baseMorphism from './base'

export default (value, wrapper) => extendMorphism(
  {
    'isFunctor': true,
    'map': (f, ...args) => wrapper(f(value, ...args))
  },

  baseMorphism
)
