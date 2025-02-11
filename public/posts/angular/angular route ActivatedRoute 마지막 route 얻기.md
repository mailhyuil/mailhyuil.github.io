# 마지막 child route 얻기

```ts
let route = this.route.snapshot;
while (route.firstChild) {
  route = route.firstChild;
}
console.log(route);
```
