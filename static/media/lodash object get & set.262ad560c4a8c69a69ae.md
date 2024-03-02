# lodash object get & set

> 접근자 문자열을 사용하여 객체의 값을 가져오거나 설정할 수 있다.

```js
import { get, set } from "lodash-es";

const person = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: 10001,
  },
};

const name = get(person, "name"); // John
const city = get(person, "address.city"); // New York

console.log(name, city);

set(person, "name", "Jane");
set(person, "address.city", "Los Angeles");

console.log(person);

// {
//   name: "Jane",
//   age: 30,
//   address: {
//     city: "Los Angeles",
//     zip: 10001,
//  }
```
