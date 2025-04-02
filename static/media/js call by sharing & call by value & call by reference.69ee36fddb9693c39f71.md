# js call by sharing & call by value & call by reference

> js는 call by reference가 없다.
>
> > js는 call by sharing 이라고도 한다. (엄밀히 말하면 call by value)
> >
> > 참조값을 직접 전달하는 것이 아닌 주소값에 대한 복사본을 만들어 수정 그리고 원본에 . 연산자로 접근하여 할당한다. (call by value)

## call by sharing

> 마치 call by reference 처럼 보인다 하지만 call by value 이다 (정확히는 call by sharing)
>
> 참조값의 복사본을 만들어서 넘김
>
> > 참조 복사본을 접근 연산자(.)로 접근하여 변경 시 원본에도 . 연산자로 접근하여 할당

```js
function changeName(obj) {
  // obj는 참조값의 복사본
  // 참조값의 복사본을 . 연산자로 변경 시 같은 참조값이기 때문에 참조값 원본도 변경됨
  obj.name = "hyuil";
}

const cat = { name: "mail" };

console.log("original name : ", cat); // { name: 'mail' }

changeName(cat);

console.log("changed name : ", cat); // { name: 'hyuil' }
// original name :  { name: 'mail' }
// changed name :  { name: 'hyuil' }
```

## 증명

```js
function changeName(obj) {
  // obj는 참조값의 복사본
  // 복사본에 새로운 참조값을 할당하니 원본은 변경되지 않음
  // 만약 참조값의 원본이였다면 obj는 변경되었을 것
  obj = { name: "hyuil" };
}

const cat = { name: "mail" };

console.log("original name : ", cat); // { name: 'mail' }

changeName(cat);

console.log("changed name : ", cat); // { name: 'mail' }

// original name :  { name: 'mail' }
// changed name :  { name: 'mail' }
```
