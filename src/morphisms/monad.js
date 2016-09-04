/**
 * src/morphisms/monad.js: morphism for basic monad
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
import functorMorphism from './functor'

export default (value, wrapper) => {
  const
    functor = functorMorphism(value, wrapper),
    bind = (f, ...args) => f(value, ...args)

  return extendMorphism(
    {
      'isMonad': true,
      bind,
      'chain': bind,
      'flatMap': bind,
      'fmap': bind
    },

    functor
  )
}
