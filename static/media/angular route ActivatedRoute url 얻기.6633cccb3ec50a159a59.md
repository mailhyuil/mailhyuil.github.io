# Angular route ActivatedRoute url 얻기

```ts
getRouteUrl(route: ActivatedRouteSnapshot): string {
while (route.firstChild) {
    route = route.firstChild;
}
return ((route as any)["_routerState"] as RouterStateSnapshot).url;
}
```
