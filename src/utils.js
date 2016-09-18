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
  // Merge given objects and return the frozen result
  extendMorphism = (props, proto) => {
    const
      objProps = Object.keys(props)
        .reduce((obj, key) => ({
          ...obj,
          [key]: { 'value': props[key] }
        }), {})

    return Object.create(proto, objProps)
  }
