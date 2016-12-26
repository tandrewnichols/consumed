[![Build Status](https://travis-ci.org/tandrewnichols/consumed.png)](https://travis-ci.org/tandrewnichols/consumed) [![downloads](http://img.shields.io/npm/dm/consumed.svg)](https://npmjs.org/package/consumed) [![npm](http://img.shields.io/npm/v/consumed.svg)](https://npmjs.org/package/consumed) [![Code Climate](https://codeclimate.com/github/tandrewnichols/consumed/badges/gpa.svg)](https://codeclimate.com/github/tandrewnichols/consumed) [![Test Coverage](https://codeclimate.com/github/tandrewnichols/consumed/badges/coverage.svg)](https://codeclimate.com/github/tandrewnichols/consumed) [![dependencies](https://david-dm.org/tandrewnichols/consumed.png)](https://david-dm.org/tandrewnichols/consumed) ![Size](https://img.shields.io/badge/size-446b-brightgreen.svg)

# consumed

Easy string consumption for parsing and lexing.

## Installation

`npm install --save consumed`

## Summary

Create a new instance of the Consumed object and pass in a string. Then you can use a single letter or a regex pattern to grab part of the string and remove it from the original.

## Usage

### Node

```js
var Consumed = require('consume');
```

### Browser

Serve `dist/consumed.js` or `dist/consumed.min.js`:

```html
<script src="dist/consumed.min.js"></script>
<script>
  var consumer = new Consumed('foo');
</script>
```

This script is only 446 bytes!

### Example

```js
var consumer = new Consumed('foo bar baz');

// Get up to the first instance of a letter
var match = consumer.consumeTill('b');
console.log(match); // 'foo '
console.log(consumer.str); // 'bar baz'

// Get up to the first instance of a letter, but include that letter
match = consumer.consumeTill('b', /*inclusive=*/true);
console.log(match); // 'bar b'
console.log(consumer.str); // 'az'

// Or match a pattern
consumer = new Consumed('foo bar baz');
match = consumer.consume(/.*(.)\1/);
console.log(match); // 'foo'
console.log(consumer.str); // ' bar baz'
```

## Contributing

Please see [the contribution guidelines](CONTRIBUTING.md).
