# dayjs

> momentjs의 경량화 버전
>
> > momentjs와 사용법은 같다

## install

```
yarn add dayjs
```

## format()

```
import dayjs from "dayjs";

dayjs().format("YYYY-MM-DD hh:mm:ss")

dayjs().format("YYYY-MM-DD 00:00")
dayjs().format("YYYY-MM-DD 23:59")
```

## get()

> 날짜 및 시간 얻기

```
dayjs().get("year") // y
dayjs().get("month") // M
dayjs().get("date") // D

dayjs().get("hour") // h
dayjs().get("minute") // m
dayjs().get("second") // s
dayjs().get("millisecond") // ms
```

## set()

> 날짜 및 시간 바꾸기

```
const date = dayjs("2021-10-10 10:30:25").format

date.set("year", 2022).format();
```

## toDate()

## startOf() / endOf()

## add() / subtract()

> 날짜 및 시간 더하기, 빼기

```
var date = dayjs("2021-10-11 10:30:25");

date.format(); // 2021-10-11T10:30:25+09:00

date.subtract(1, "year").format(); // 2020-10-11T10:30:25+09:00
```

## diff()

> 날짜 및 시간 차이 구하기

```
date1.format("YYYY-MM-DD HH:mm:ss.SSS"); // 2021-10-11 10:30:25.495
date2.format("YYYY-MM-DD HH:mm:ss.SSS"); // 2020-04-08 13:25:30.000

date1.diff(date2, "year"); // 1
```

## isSame()

> 날짜 및 시간이 일치하는 구하기

```
var date = dayjs("2021-10-11");

date.isSame("2021-10-11"); // true
```

# dayjs-business-time
