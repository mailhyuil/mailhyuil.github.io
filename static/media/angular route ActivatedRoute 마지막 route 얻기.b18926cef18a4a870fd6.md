# 마지막 child route 얻기

## 방법 1. route.firstChild 사용

```ts
let route = this.route.snapshot;
while (route.firstChild) {
  route = route.firstChild;
}
console.log(route);
```

## 방법 2. ChildrenOutletContexts 사용

```ts
contexts = inject(ChildrenOutletContexts);
const currentRoute = this.contexts.getContext("primary")?.route?.snapshot;
```
