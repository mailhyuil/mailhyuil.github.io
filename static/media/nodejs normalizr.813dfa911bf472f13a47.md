# nodejs normalizr

> 데이터를 id를 기준으로 정규화 시켜주는 라이브러리
>
> > 받아온 데이터를 filter를 통해 찾아야 한다면, 정규화를 고려해라
> >
> > > 데이터의 중복 제거한다.
> > > computational cost없이 데이터를 찾을 수 있다.
> > > 원하는 데이터에 쉽게 접근이 가능하다. data[id] 로 접근이 가능하다.
> > > store's tree의 작은 부분만 업데이트 가능하다.

## install

```sh
npm i normalizr
```

## 구조

> entityKey = "users" or "articles" or "comments"

```js
{
  entities :{
    [entityKey]: {
      [id]: {
        // entity data
      }
    }
  },
  result: [...ids]
}
```

## 정규화 전 vs 정규화 후

```js
import { normalize, schema } from "normalizr";

// 정규화 전
// data를 찾기 위해서 filter 과정이 필요하다.
const originalData = {
  id: "123",
  author: {
    id: "1",
    name: "Paul",
  },
  title: "My awesome blog post",
  comments: [
    {
      id: "324",
      commenter: {
        id: "2",
        name: "Nicole",
      },
    },
  ],
};

// Define a users schema
const user = new schema.Entity("users");

// Define your comments schema
const comment = new schema.Entity("comments", {
  commenter: user,
});

// Define your article
const article = new schema.Entity("articles", {
  author: user,
  comments: [comment],
});

// 정규화
// user[1] 로 접근 가능
const normalizedData = normalize(originalData, article);
{
  entities: {
    "articles": {
      "123": {
        id: "123",
        author: "1",
        title: "My awesome blog post",
        comments: [ "324" ]
      }
    },
    "users": {
      "1": { "id": "1", "name": "Paul" },
      "2": { "id": "2", "name": "Nicole" }
    },
    "comments": {
      "324": { id: "324", "commenter": "2" }
    }
  },
  result: ["123"],
}
```
