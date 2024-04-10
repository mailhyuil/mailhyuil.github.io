# redis base key naming policy

## 키의 이름은 고유해야한다. (unique)

## 다른 개발자가 봐도 이해할 수 있도록 작성한다.

## 키에 콜론(:)을 넣어 계층 구조를 만든다.

```sh
users:45
users:posts:12
posts:a3j12l
items:34
```

## 키에 해시태그(#)를 넣어 계층 구조를 만든다

> 이 규칙을 사용하면 redis의 검색기능을 사용할 수 있다.

```sh
users:posts#12
pagecache#/about
pagecache#/auth/signup
pagecache#/auth/signin
pagecache#/privacy
```

## 휴먼에러가 발생하지 않도록 키를 생성하는 함수를 만들어서 사용해라

```js
export const pageCacheKey = (id: string) => `pagecache#${id}`;

export const setPageCache = (route: string, page: string) => {
  if (cacheRoute.includes(route)) {
    redis.set(pageCacheKey(route), page, {
      EX: 2,
    });
  }
};
```
