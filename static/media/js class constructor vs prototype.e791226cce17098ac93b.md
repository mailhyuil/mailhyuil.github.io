# js class constructor vs prototype

## constructor

> new 키워드를 사용할 때 호출되어 인스턴스를 생성하는 함수

```js
class User {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const user = new User("Hyuil");

console.log(user.getName());
```

## prototype

> 생성자 함수로 생성된 인스턴스들이 공유하는 프로퍼티나 메소드를 정의하는 객체
>
> > prototype chain을 통해 인스턴스들이 prototype 에 연결되고 prototype의 최상위 객체는 Object 이다.

```js
console.log(user["__proto__"] === User.prototype); // true
```
