/**
 * src/utils.js: shared utility functions
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

export const
  freeze = obj => {
    const
      thingsToFreeze = ['object', 'function'],
      fpropsNotToFreeze = ['caller', 'callee', 'arguments'],
      isFunction = 'function' === typeof obj

    if(
      // No need to freeze if already frozen
      !Object.isFrozen(obj)

      // No need to freeze a `null`
      && null !== obj

      // Check if we need to freeze this type of things
      && thingsToFreeze.includes(typeof obj)
    ) {
      Reflect.ownKeys(obj)
        .filter(prop => {
          return isFunction ? !fpropsNotToFreeze.includes(prop) : true
        })
        .forEach(prop => freeze(obj[prop]))

      return Object.freeze(obj)
    }

    return obj
  }
