# rxjs map

```js
this.http
  .get("https://api.github.com/users")
  .pipe(map((res) => res.json()))
  .subscribe((data) => {
    console.log(data);
  });
```
