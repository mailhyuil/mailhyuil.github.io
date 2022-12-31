# JSDoc

```ts
// @ts-check

/**
 *
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */

export function init(config) {
  return true;
}

/**
 *
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}
```

```shell
npm i -D ts-node
```

```shell
npm i -D @types/node
```

```shell
npm i -D @types/packageName
```
