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
import { morphismFactory } from './base'

export default (value, wrapper, divert, divertedWrapper) => {
  const
    // Using default wrapper (identity) here is same as using no wrapper.
    // See implementation of morphismFactory
    bind = morphismFactory({
      value,
      divert
    })

  return extendMorphism(
    {
      'isMonad': true,

      bind,

      // 3 common aliases of `bind`
      'chain': bind,
      'flatMap': bind,
      'fmap': bind
    },

    functorMorphism(value, wrapper, divert, divertedWrapper)
  )
}
