# rxjs Promise

> Observable과 똑같이 higherorder map 사용

```js
this.http
  .get("https://jsonplaceholder.typicode.com/posts")
  .pipe(switchMap((res) => promiseFn(res)))
  .subscribe((data: any) => {
    console.log(data);
  });
```
