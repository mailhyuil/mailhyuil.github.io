# Promise.all()

> 병렬로 비동기 요청 보내기
>
> > await는 블로킹하는 코드!

## 직렬

> 느림
>
> > await를 순차적으로 나열하거나 for of 문을 사용하면 직렬

```ts
const res1 = await fetch(urls[0]);
const data1 = await res1.json();

const res2 = await fetch(urls[1]);
const data2 = await res2.json();
```

## 병렬

> 빠름
>
> > forEach, map 내에서 await를 사용 혹은 Promise.all 하면 병렬로 처리

```ts
const requests = urls.map((url) => fetch(url)); // return pending array

const [res1, res2] = await Promise.all(requests);
const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
```

# Promise.all()

```ts
const promises = views?.map((view) => {
  return tx.webComplexView.create({ data: { ...view, webComplexId: updated.id } });
});

await Promise.all(promises);
```

or

```ts
await Promise.all(
  views?.map((view) => {
    return tx.webComplexView.create({ data: { ...view, webComplexId: updated.id } });
  })
);
```

## 병렬 순차 처리

```ts
const requestList = [request("A"), request("B"), request("C")];

Promise.all(requestList).then((responses) => {
  for (const response of responses) {
    console.log(response);
  }
});
```

```
const arr = ["A", "B", "C"];
const arrFunc = arr.map((type) => request(type));

for (const func of arrFunc) {
    console.log(await func);
}
```

## wrong

> ?. 사용

```ts
const promises = datas?.map((i) => {
  return useApi(`web-name-change-application/${i.id}/hide`, {
    method: "PATCH",
  });
});

await Promise.all([promises]);
```

## correct

> if로 null 체크

```ts
if (datas) {
  const promises = datas.map((i) => {
    return useApi(`web-name-change-application/${i.id}/hide`, {
      method: "PATCH",
    });
  });

  await Promise.all(promises);
}
```
