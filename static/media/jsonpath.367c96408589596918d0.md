# jsonpath

> json 객체를 탐색하기 위한 표준화된 경로 표현식

```txt
$ : 루트 노드. JSONPath의 모든 표현식은 이것으로 시작된다.
@ : 현재 노드. 아래에서 소개할 조건부 필터 표현식에서 사용된다.
. : 하위 노드
.. : 중첩된 전체 하위 요소들(nested descendants)
[] : 배열 인덱스
* : 모든 요소와 매칭되는 와일드 카드
?(boolean expression) : 조건부 필터 표현식
```

## 객체 탐색

```json
{
  "bicycle": {
    "color": "red",
    "price": 19.95
  }
}
```

```js
$.bicycle; // [{"color": "red", "price": 19.95}]
$.bicycle.color; // ["red"]
```

## 배열 탐색

```json
{
  "book": [
    {
      "category": "fiction",
      "author": "Herman Melville",
      "title": "Moby Dick",
      "isbn": "0-553-21311-3",
      "price": 8.99
    },
    {
      "category": "fiction",
      "author": "J. R. R. Tolkien",
      "title": "The Lord of the Rings",
      "isbn": "0-395-19395-8",
      "price": 22.99
    }
  ]
}
```

```js
$.book[0:1].isbn	// ["0-553-21311-3"]
$.book[-1:].title	// ["The Lord of the Rings"]
$.book[*].category	// ["fiction", "fiction"]
```

## 조건 필터

```json
{
  "store": {
    "book": [
      {
        "category": "reference",
        "author": "Nigel Rees",
        "title": "Sayings of the Century",
        "price": 8.95
      },
      {
        "category": "fiction",
        "author": "Evelyn Waugh",
        "title": "Sword of Honour",
        "price": 12.99
      },
      {
        "category": "fiction",
        "author": "Herman Melville",
        "title": "Moby Dick",
        "isbn": "0-553-21311-3",
        "price": 8.99
      },
      {
        "category": "fiction",
        "author": "J. R. R. Tolkien",
        "title": "The Lord of the Rings",
        "isbn": "0-395-19395-8",
        "price": 22.99
      }
    ],
    "bicycle": {
      "color": "red",
      "price": 19.95
    }
  }
}
```

```js
$..book[?(@.price < 10)].title	// ["Sayings of the Century", "Moby Dick"]
$.store..[?(@.category == "reference")].author	// ["Nigel Rees"]
$.store.[?(@.category == "reference")][title,author]	// ["Sayings of the Century", "Nigel Rees"]
$.store.[?(@.color == "red")].price	// [19.95]
```
