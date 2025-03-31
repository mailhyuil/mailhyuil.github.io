# js diff

## install

```sh
npm i json-diff
npm i deep-diff
# or
npm i lodash-es
```

## json-diff

```js

```

## lodash

```js
/**
 * This code is licensed under the terms of the MIT license
 *
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
function difference(object, base) {
  function changes(object, base) {
    return _.transform(object, function (result, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] = _.isObject(value) && _.isObject(base[key]) ? changes(value, base[key]) : value;
      }
    });
  }
  return changes(object, base);
}
```
