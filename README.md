# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @acronaut/lotide`

**Require it:**

`const _ = require('@acronaut/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: Gets the first element of array.
* `tail(arr)`: Gets the last element of array.
* `middle(arr)`: Get the middle element of array.

* `assertArraysEqual(arr, arr)`: Assertion Equality between Arrays.
* `assertEqual(str)`: Assertion Equality (String).
* `assertObjectsEqual(obj, obj)`: Assertion Equality (Object).

* `countLetters(str)`: Count of Letters from string.
* `countOnly(arr, obj)`: Returns object from key/value iterative pairs.
* `eqArrays(arr, arr)`: Equality-check through arrays.
* `eqObjects(obj, obj)`: Equality-check through objects.
* `findKey(obj, callback)`: Key search on object.
* `findKeyByValue(key, str)`: Key search on object where its value matches given value.
* `letterPositions(str)`: Return numeric-Indices of Character Positions.
* `map(arr, callback)`: Return new array on results of callback function.
* `takeUntil(arr, callback)`: Return slice of array with starting elements until truthy.
* `without(arr, itm2rm)`: Expurgate unwanted values from array.


