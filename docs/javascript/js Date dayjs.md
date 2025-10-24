# js Date dayjs

> momentjs의 경량화 버전
>
> > momentjs와 사용법은 같다

## install

```sh
npm i dayjs
```

## format()

```js
import dayjs from "dayjs";

dayjs().format("YYYY-MM-DD hh:mm:ss");

dayjs().format("YYYY-MM-DD 00:00");
dayjs().format("YYYY-MM-DD 23:59");
```

## get()

> 날짜 및 시간 얻기

```js
dayjs().get("year");
dayjs().year();

dayjs().get("month");
dayjs().month();

dayjs().get("day"); // 주를 0 ~ 6으로 반환
dayjs().day();

// 토요일 일요일 제외시키기
if (dayjs().day() === (0 || 6)) {
}

dayjs().get("date"); // 날짜를 반환
dayjs().date();

dayjs().get("hour"); // h
dayjs().hour();

dayjs().get("minute"); // m
dayjs().minute();

dayjs().get("second"); // s
dayjs().second();

dayjs().get("millisecond"); // ms
dayjs().millisecond();
```

## set()

> 날짜 및 시간 바꾸기

```js
const date = dayjs("2021-10-10 10:30:25").format;

date.set("year", 2022).format();
```

## toDate()

## startOf() / endOf()

> startOf 매개변수에 들어간 단위뒤로는 0으로 초기화 (e.g. startOf('hour') === 분까지는 0으로 설정)
>
> > endOf 매개변수가 들어간 단위뒤로는 단위의 끝값으로 설정 (e.g. endOf('hour') === 분까지는 59으로 설정)

```js
dayjs().startOf("hour");
dayjs().endOf("hour");
```

## add() / subtract()

> 날짜 및 시간 더하기, 빼기

```js
var date = dayjs("2021-10-11 10:30:25");

date.format(); // 2021-10-11T10:30:25+09:00

date.subtract(1, "year").format(); // 2020-10-11T10:30:25+09:00
```

## diff()

> 날짜 및 시간 차이 구하기

```js
date1.format("YYYY-MM-DD HH:mm:ss.SSS"); // 2021-10-11 10:30:25.495
date2.format("YYYY-MM-DD HH:mm:ss.SSS"); // 2020-04-08 13:25:30.000

date1.diff(date2, "year"); // 1
```

## isBefore() && isAfter && isSame()

> `<`, `>`, `===` 로직과 비슷하다고 생각하면 된다

```js
var date = dayjs("2021-10-11");

date.isSame("2021-10-11"); // true
```

### IsSameOrBefore && IsSameOrAfter && IsBetween plugin

> `<=`, `>=`, `between`

```js
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);

const isBetween = require("dayjs/plugin/isBetween");
dayjs.extend(isBetween);
```

## dayjs hour min

```js
dayjs().hour(23).minute(59).toDate(),
```
