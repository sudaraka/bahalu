/**
 * src/containers/either.js: either container
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
import just from '../just'

const
  isNothing = value => null === value || 'undefined' === typeof value,

  either = lowContainer => {
    const
      inner = divert => value => monad(value, inner(divert), divert, lowContainer)

    inner.of = (value, divert = isNothing) => inner(divert)(value)


    return inner
  }

export default either(just)
export { either as eitherOr }
