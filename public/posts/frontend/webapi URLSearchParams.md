# URLSearchParams

> 쿼리스트링을 조합하거나 가져오는 용도
>
> > 쿼리스트링을 url에 붙여주지는 않는다.
> >
> > > 중복된 값은 &filter=MALE&filter=CHILD 이런식으로 들어감 (getAll)하면 배열로 반환

```js
const paramsString = "pageNo=1&orderBy=createdAt&filter=MALE&filter=CHILD";
const searchParams = new URLSearchParams(paramsString);

searchParams.has("pageNo");
searchParams.set("pageNo", 2);
searchParams.get("pageNo");
searchParams.getAll("filter");
searchParams.append("filter", "CHILD");
searchParams.delete("filter");
searchParams.delete("filter", "CHILD");

history.push({
  pathname: "/",
  search: searchParams.toString(),
});

// angular
this.router.navigate(["/"], {
  queryParams: searchParams.toString(),
  queryParamsHandling: "merge",
  replaceUrl: true,
});

this.router.navigate(["/"], {
  queryParams: {
    [filterName]: urlSearchParams.getAll(filterName),
    queryParamsHandling: "merge",
    replaceUrl: true,
  },
});
```
