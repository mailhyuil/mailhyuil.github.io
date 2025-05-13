# webAPI indexedDB

> 많은 양의 구조화된 데이터를 저장할 때 유용
>
> > localStorage, sessionStorage와 달리, JS가 인식할 수 있는 자료형과 객체를 저장할 수 있다.
> >
> > > document db에 가깝다.
> > >
> > > > 키, 값 형태로 데이터가 저장되며 문자열 타입이 아니어도 된다.
> > > >
> > > > > 비동기로 작동

## usage

```js
if (!window.indexedDB) {
  window.alert("브라우저가 indexedDB를 지원하지 않습니다.");
}

const request = indexedDB.open("mydb");

request.onerror = function (event) {
  console.error(event.target.errorCode);
  alert("indexedDB를 열 수 없습니다.");
};

request.onsuccess = function (event) {
  const db = event.target.result;

  const objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

  objectStore.createIndex("name", "name", { unique: false });
  objectStore.createIndex("email", "email", { unique: true });

  objectStore.transaction.oncomplete = function (event) {
    const customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
    customerData.forEach(function (customer) {
      customerObjectStore.add(customer);
    });
  };
};
```
