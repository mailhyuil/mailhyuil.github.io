# JSDoc

> @ts-check를 주석으로 추가하면 바닐라 자바스크립트 소스코드에서도 TypeScript처럼 타입 및 에러 체크가 가능하다.
>
> > 이는 vscode가 지원하는 기능이다.

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
