# js instanceof

> constructor의 prototype 속성을 체크
>
> > instanceof 연산자는 object의 프로토타입 체인에 constructor.prototype이 존재하는지 판별합니다.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true
```
