# dayjs logic

```ts
let currentDate = dayjs(startDate);
const closeDate = dayjs(endDate);

while (!currentDate.isSame(closeDate.add(1, "day"))) {
  currentDate = currentDate.add(1, "day");
}
```
