# js number 형변환 Number vs parseInt & parseFloat

> parseInt와 parseFloat는 동작이 제멋대로인 경우가 많아 Number를 사용하는 것이 좋다.

## Number

> string을 숫자로 그대로 변환
>
> > string이 숫자의 포멧에 맞지 않을경우 무조건 NaN를 반환

```js
Number("123"); // 123
Number("123.45"); // 123.45
Number("123.45.67"); // NaN
Number("2024년"); // NaN
Number("제1회"); // NaN
```

## parseInt

> string이 숫자의 포멧에 맞지 않아도 int를 추출하여 변환
>
> > 하지만 맨 앞의 글자가 숫자가 아닐경우 NaN를 반환
> >
> > > 소수점은 무시

```js
parseInt("123"); // 123
parseInt("123.45"); // 123
parseInt("123.45.67"); // 123
parseInt("2024년"); // 2024
parseInt("제1회"); // NaN
```

## parseFloat

> parseInt와 같지만 소수점을 포함하여 변환

```js
parseFloat("123"); // 123
parseFloat("123.45"); // 123.45
parseFloat("123.45.67"); // 123.45
parseFloat("2024년"); // 2024
parseFloat("제1회"); // NaN
```
