/**
 * src/containers/either.js: Right and Left containers for the Either pattern
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

import { freeze } from '../utils'

const
  // right :: a -> Right(a)
  // Implements the "Right of a" pattern.
  right = value => {
    let
      // Contained value is kept in a JavaScript closure to avoid direct access
      // to it from outside.
      _value = null

    const
      // Prototype for the container object exposed to outside.
      Right = newValue => {
        if('undefined' !== typeof newValue) {
          _value = freeze(newValue)
        }
      }

    // map :: (a) -> Right(f(a))
    // Note: not using arrow function as `this` must bind to the inner scope.
    Right.prototype.map = function(f) {
      if('function' !== typeof f) {
        // When given `f` is not callable, return the same container.
        return this
      }

      return right(f(_value))
    }

    return new Right(value)
  },

  // left :: a -> Left(a)
  // Implements the "Left of a" pattern.
  left = value => {
    let
      // Contained value is kept in a JavaScript closure to avoid direct access
      // to it from outside.
      _value = null

    const
      // Prototype for the container object exposed to outside.
      Left = newValue => {
        if('undefined' !== typeof newValue) {
          _value = freeze(newValue)
        }
      }

    // map :: _ -> Left(a)
    // Note: not using arrow function as `this` must bind to the inner scope.
    Left.prototype.map = function() {
      return this
    }

    // unsafeMap :: (_) -> Left(a)
    // Note: not using arrow function as `this` must bind to the inner scope.
    Left.prototype.unsafeMap = function(f) {
      if('function' === typeof f) {
        // When given `f` is callable, call it and discard the return value.
        f(_value)
      }

      return this
    }

    return new Left(value)
  }

export { right, left }
