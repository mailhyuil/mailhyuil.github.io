# apexChart

## install

```sh
npm install --save apexcharts
```

## series (datasets)

> ApexAxisChartSeries
>
> > {name:string, data:any[]}[] 구조의 배열

## data

> 단일 값, 배열, 객체등의 데이터가 들어갈 수 있다.

```js
// single value
data: [23, 34, 12, 54, 32, ... , 43]
categories: ["Jan", "Feb", "Mar", ... , "Dec"]

// pair value
data: [[1, 34]]
data: [{x: 20, y: 54}],
data: [{x: 'Apple', y: 54}],

// for timeline
data: [[1324508400000, 34]]; // timestamp
data: [{ x: "05/06/2014", y: 54 }]; // date

// for pie/donuts/radialBars
series: [23, 11, 54, 72, 12],
labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"]
```

## xaxis & yaxis

> x축과 y축의 레이블을 설정할 수 있다.

## map으로 데이터 가공

```ts
// {date, totalUsers}를 [{x:date,y:totalUsers},...]로

const totalUserSeries: ApexAxisChartSeries = {
  name: "전체 방문수",
  data: data.map((item) => ({ x: item.date, y: item.totalUsers })),
};
```
