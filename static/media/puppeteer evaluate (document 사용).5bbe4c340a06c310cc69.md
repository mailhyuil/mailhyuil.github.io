# puppeteer evaluate (document 사용)

> evaluate는 chrome devtools에서 돌아가기 때문에 document를 사용가능
>
> > 같은 이유로 data, type, function들은 evaluate함수 내로 넘겨줘야 사용 가능
> >
> > > 두번째 인자로 넘기기

```ts
const browser = await puppeteer.launch({
  headless: true,
  defaultViewport: null,
});

const page = await browser.newPage();

const data = "hi";

page.evaluate((data) => {
  document.querySelector(".button");
}, data); // data 넘기기
```
