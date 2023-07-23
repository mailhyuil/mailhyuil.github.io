# js forEach async

> forEach는 await를 기다려주지 않는다.

## 병렬

```
function(){
urls.forEach(async (url) => {
  console.log(`${url}요청 시작`)
  const res = await fetch(baseURL+url)
  const result = await res.json()
  console.log(`${url}요청 끝`)
  })
console.log('전체 요청 끝')
}
```

## 직렬

> for of는 async를 기다려준다.

```
async function (){
for(let url of urls){
  console.log(`${url}요청 시작`)
  const res = await fetch(baseURL+url)
  const result = await res.json()
  console.log(`${url}요청 끝`)
  })
console.log('전체 요청 끝')
}
```
