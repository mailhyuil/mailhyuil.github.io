# puppeteer evaluate (document 사용)

> 값을 반환하는 evaluate 함수
>
> > evaluate는 브라우저 내부에서 실행되는 함수이기 때문에 dom에 접근 가능하다.
> >
> > > node 코드 공간과 분리되어 있기 때문에 data, type, function들은 evaluate함수 두번째 인자로 넘겨줘야 사용 가능하다.
> > >
> > > > 하나의 evaluate에서 하나의 element만 최소한으로 작업하는게 가독성이 좋다.

```ts
const pHandle = await page.$("p");

const text = await page.evaluate(p => {
  const text = p.innerText.trim();
  return text;
}, pHandle);
// or

const text = await pHandle.evaluate(p => {
  const text = p.innerText.trim();
  return text;
});
```
