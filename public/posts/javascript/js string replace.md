# js replace

> 정규표현식에서 일치된 그룹(괄호로 둘러싸이면 그룹)을 각각 $1 $2 $3에 대입시킨다.

```js
string.replace(/^(\d{2,3})(\d{3,4})(\d{4})/g, "$1-$2-$3");
```
