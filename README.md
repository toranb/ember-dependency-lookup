# ember-dependency-lookup

[![Travis][ci-img]][ci-url] [![NPM][npm-img]][npm-url] ![Ember][ember-img]

## When is this useful?

When you are using pure functions but need to lookup something in the ember container


## Installation

```bash
ember install ember-dependency-lookup
```

## Usage

```js
//app/middleware/index.js
import { put, takeEvery } from 'redux-saga/effects';
import { lookup } from 'ember-dependency-lookup';

function* transitionAsync() {
  yield put({type: 'TRANSITION_START'});
  lookup('service:-routing').transitionTo('index');
}

export function* transition() {
  yield takeEvery('TRANSITION', transitionAsync);
}
```

[ci-img]: https://img.shields.io/travis/toranb/ember-dependency-lookup.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/toranb/ember-dependency-lookup
[ember-img]: https://img.shields.io/badge/ember-2.12+-green.svg "Ember 2.12+"
[npm-img]: https://img.shields.io/npm/v/ember-dependency-lookup.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-dependency-lookup
