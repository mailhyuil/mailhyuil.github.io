# html base tag

> The browser uses the <base href> value to prefix relative URLs when referencing CSS files, scripts, and images.
>
> > 브라우저는 CSS, JS, Image.. 의 파일을 찾을 때 base의 href값을 prefix로 사용
> >
> > > (e.g. base href 가 / 면 src="assets"은 src="/assets"로 해석됩니다.)

```js
<base href="/" />
<base href="./" />
```
