# 날짜 초기화

> startOf('data')를 사용하면 시간부터 전부 0으로 초기화

```
if (option.isAccepting === 'true') {
  filterCondition.push({ endsAt: { gte: dayjs().startOf('date') } });
} else if (option.isAccepting === 'false') {
  filterCondition.push({ endsAt: { lt: dayjs().startOf('date') } });
}
```
