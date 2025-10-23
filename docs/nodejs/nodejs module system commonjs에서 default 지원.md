# nodejs module system commonjs에서 default를 지원

> Babel과 같은 트랜스파일러는 ES6 모듈을 CommonJS 모듈로 변환할 때, ES6의 default 내보내기를 지원하기 위해 \_\_esModule 속성을 추가합니다.
>
> > 모듈의 \_\_esModule 속성을 true로 설정하고, default 속성에 default로 내보내는 값을 할당합니다.

```js
// 변환된 myModule.js (CommonJS)
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = function () {
  console.log("This is the default export");
};
```

## testing에서 mock 객체를 esmodule default로 내보내기?

```js
jest.mock('./client', () => ({
  __esModule: true,
  default: mockDeep<PrismaClient>(),
}))
```
