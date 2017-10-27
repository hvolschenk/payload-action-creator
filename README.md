# payload-action-creator

[![Build Status](https://travis-ci.org/hvolschenk/payload-action-creator.svg?branch=master)](https://travis-ci.org/hvolschenk/payload-action-creator)
[![Coverage Status](https://coveralls.io/repos/github/hvolschenk/payload-action-creator/badge.svg?branch=master)](https://coveralls.io/github/hvolschenk/payload-action-creator?branch=master)
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
