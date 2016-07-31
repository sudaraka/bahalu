# Change Log

All notable changes to the **bahalu** package.

Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>

This program comes with ABSOLUTELY NO WARRANTY;
This is free software, and you are welcome to redistribute it and/or modify it
under the terms of the BSD 2-clause License. See the LICENSE file for more
details.

---

## [Unreleased]
### Added
- Built-in utility function to deep freeze objects.
- `webpack` to build distributable code.

### Changed
- Moved test files in to `src/` directory with `*_spec.js` naming convention.

### Removed
- `deep-freeze-strict` dependency.

## [0.0.1] - 206-07-24
### Added
- `Left` container for the `Either` pattern
- `deep-freeze-strict` to make the contained value immutable.
- `Right` container for the `Either` pattern
- `mocha` based test support
- `eslint` support
- `babel` to transpile ES2015 code
- `npm` support (a.k.a package.json)
- README, LICENSE and CHANGELOG
