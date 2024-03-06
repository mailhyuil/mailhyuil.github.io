# angular route current route data 접근

```ts
accessToData() {
  let route = this.route.snapshot;
  while (route.firstChild) {
    route = route.firstChild;
    console.log(route.data) // 뒤에 위치!
  }
}
```
