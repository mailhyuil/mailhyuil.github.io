# puppeteer $ & $$

## $

> page 내부에서 selector에 해당하는 첫 번째 elementHandle을 반환한다.

```ts
const pHandle = await page.$("p");

const text = await pHandle.evaluate(p => {
  const text = p.innerText.trim();
  return text;
});
```

## $$

> page 내부에서 selector에 해당하는 모든 elementHandle[]을 반환한다.

```ts
const pHandles = await page.$$("p");

const texts = await Promise.all(
  pHandles.map(pHandle => {
    return pHandle.evaluate(p => {
      const text = p.innerText.trim();
      return text;
    });
  }),
);
```

## $eval

> page 내부에서 selector에 해당하는 첫 번째 elementHandle을 evaluate한다.
>
> > $와 evaluate를 합친 것

```ts
const text = await page.$eval("p", p => {
  return p.textContent.trim();
});
```

## puppeteer locator

> playwright에서 가져온 스타일
>
> > handle을 evaluate하는 방식보다 더 직관적이다
> >
> > > 동기적으로 작동
> > >
> > > 동적으로 변경되는 요소 찾기 지원 ($eval)
> > >
> > > 여러 요소도 찾을 수 있다.
> > >
> > > 체이닝 가능

```ts
const p = await page.locator("p").textContent();

const images = await page.locator("img").all();
```
