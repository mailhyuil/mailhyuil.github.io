# 화살표 함수를 쓰면 안되는 경우

1. 객체 메소드

   > 화살표 함수의 this는 상위스코프를 가르키기에 객체 내 화살표함수의 this는 전역객체(window)를 가르킨다.

2. prototype 메소드

   > 객체 메소드와 마찬가지

3. arguments
   > arguments를 사용할 수 없다
   >
   > > ...args로 사용 가능하긴하다.
4. addEventListener
   > 마찬가지로 this가 전역객체(window)를 가르킨다.
   >
   > > 따라서 this로 요소를 변경하는 문법을 사용할 수 없다. // button을 그대로 가져와야한다.

```
const button = document.getElementById('name');

button.addEventListener('click', () => {
  button.innerHTML = '클릭!';
});
```

```
const button = document.getElementById('name');

button.addEventListener('click', function(){
  this.innerHTML = '클릭!';
});
```
