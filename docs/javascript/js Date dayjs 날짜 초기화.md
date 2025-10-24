# js Date dayjs 날짜 초기화

> startOf('data')를 사용하면 시간부터 전부 0으로 초기화

```js
{
  startDate: {
    gte: dayjs().startOf("date");
  },
  endDate: {
    lt: dayjs().endOf("date");
  }
}
```
