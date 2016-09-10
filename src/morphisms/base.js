/**
 * src/morphisms/base.js: base for all container morphisms
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

const
  identity = _ => _

export default () => ({ 'isContainer': true })

export const  // eslint-disable-line one-var
  morphismFactory = ({ wrapper = identity, value }) =>
    (f, ...args) => wrapper(f(value, ...args))
