/**
 * src/containers/maybe.js: maybe container
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import monad from '../../morphisms/monad'

const
  isNothing = value => null === value || 'undefined' === typeof value,

  maybe = divert => value => monad(value, maybe(divert), divert)

maybe.of = (value, divert = isNothing) => maybe(divert)(value)

export default maybe

