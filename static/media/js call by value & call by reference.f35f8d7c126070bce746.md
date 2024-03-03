# js call by value & call by reference

> js는 call by reference가 없다.
>
> > js는 call by sharing 이라고도 한다. (엄밀히 말하면 call by value)
> >
> > 참조값을 직접 전달하는 것이 아닌 주소값에 대한 복사본을 만들어 수정 그리고 원본에 . 연산자로 접근하여 할당한다. (call by value)

## 마치 call by reference 처럼 보인다 하지만..

```js
function changeName(obj) {
  obj.name = "hyuil";
}

const cat = { name: "mail" };

console.log("original name : ", cat);

changeName(cat);

console.log("changed name : ", cat);

// original name :  { name: 'mail' }
// changed name :  { name: 'hyuil' }
```

## call by value

> 참조값에 대한 복사본을 만들어서 넘김
>
> > 복사본을 변경
> >
> > > . 연산자를 사용해서 복사본의 값을 원본에 할당

```js
function changeName(obj) {
  obj = { name: "hyuil" };
}

const cat = { name: "mail" };

console.log("original name : ", cat);

changeName(cat);

console.log("changed name : ", cat);

// original name :  { name: 'mail' }
// changed name :  { name: 'mail' }
```
