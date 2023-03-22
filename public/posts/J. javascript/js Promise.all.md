# Promise.all()

> 병렬로 비동기 요청 보내기
>
> > await는 블로킹하는 코드!

## 직렬

> 느림

```
const res1 = await fetch(urls[0])
const data1 = await res1.json();

const res2 = await fetch(urls[1])
const data2 = await res2.json();
```

## 병렬

> 빠름

```
const requests = urls.map(url => fetch(url))

const [res1, res2] = await Promise.all(requests)
const [data1, data2] = await Promise.all([res1.json(), res2.json()])
```
