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
  // identity : a -> a
  // function that always return the given value
  identity = _ => _,

  // never : ? -> false
  // function that always return boolean false
  never = () => false

export default () => ({ 'isContainer': true })

export const  // eslint-disable-line one-var
  // morphismFactory :
  // params: object containing value, wrapper and divert
  //
  //   - value           : container value that is closed in the generated
  //                       morphism.
  //   - wrapper         : container that is exposed to the public.
  //   - divert          : function returning the boolean decision of weather or
  //                       not to apply the given function.
  //   - divertedWrapper : optional wrapper to be used when diverting the flow.
  //
  morphismFactory = ({ wrapper = identity, divert = never, divertedWrapper, value }) => {
    if('function' !== typeof divertedWrapper) {
      divertedWrapper = wrapper
    }

    return (f, ...args) => {
      if(divert(value)) {
        return divertedWrapper(value)
      }

      return wrapper(f(value, ...args) || null)
    }
  }
