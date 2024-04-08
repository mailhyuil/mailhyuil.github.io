# webapi indexedDB

> 많은 양의 구조화된 데이터를 저장할 때 유용
>
> > localStoage와 달리, JS가 인식할 수 있는 자료형과 객체를 저장할 수 있다.
> >
> > > 키, 값 형태로 데이터가 저장되며 문자열 타입이 아니어도 된다.
> > >
> > > > 비동기로 작동

## 사용

```js
if (!window.indexedDB) {
  window.alert("브라우저가 indexedDB를 지원하지 않습니다.");
}

var db;
var request = indexedDB.open("MyTestDatabase");
request.onerror = function (event) {
  alert("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = function (event) {
  db = request.result;
};
```
