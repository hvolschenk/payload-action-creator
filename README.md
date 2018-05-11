# payload-action-creator

[![Build Status](https://travis-ci.org/hvolschenk/payload-action-creator.svg?branch=master)](https://travis-ci.org/hvolschenk/payload-action-creator)
[![Coverage Status](https://coveralls.io/repos/github/hvolschenk/payload-action-creator/badge.svg?branch=master)](https://coveralls.io/github/hvolschenk/payload-action-creator?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/hendrik-volschenk/projects/35c950e1-ea87-4da7-97b8-8142aa894187/badge)](https://nodesecurity.io/orgs/hendrik-volschenk/projects/35c950e1-ea87-4da7-97b8-8142aa894187)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A very simple Redux payload action creator factory

## Installation

`payload-action-creator` can be installed via **npm**:

```sh
$ npm i -S payload-action-creator
```

## Usage

Create action creators by passing it the `type` of the action to create:

```js
import action from 'payload-action-creator';

export const PRODUCTS_FETCHED = 'PRODUCTS_FETCHED';
export const productsFetched = action(PRODUCTS_FETCHED);
```

Now you can dispatch the action from a connected container in your application:

```js
import { connect } from 'react-redux';
import { productsFetched } from './actions';
import Component from './component';

const mapDispatchToProps = dispatch => ({
  products: payload => dispatch(productsFetched(payload)),
});

export default connect(undefined, mapDispatchToProps)(Component);
```

The action creator will create an object like so:

```
{
  payload: thePayloadYouPassedIn,
  type: PRODUCTS_FETCHED,
}
```
