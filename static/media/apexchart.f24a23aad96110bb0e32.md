# apexChart

## install

```sh
npm install --save apexcharts
npm install --save vue3-apexcharts
```

## plugin

```ts
import VueApexCharts from "vue3-apexcharts";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueApexCharts);
});
```

## 사용

```vue
<apexcharts type="" series="" width="" height="" options=""></apexcharts>
```

## series

> ApexAxisChartSeries

```
// {date, totalUsers}를 [{x:date,y:totalUsers},...]로

const totalUserSeries: ApexAxisChartSeries = {
  name: "전체 방문수",
  data: data.map((item) => ({ x: item.date, y: item.totalUsers })),
};
```
