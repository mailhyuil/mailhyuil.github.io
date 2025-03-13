# python \_\_init\_\_

> \_\_init\_\_ === constructor
>
> > self === this
> >
> > (단 self는 반드시 첫번째 매개변수로 받아야 함)
> >
> > > \_\_init\_\_은 파이썬에서 클래스의 생성자(constructor) 메소드

## python

```py
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
```

## js

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```
