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
<script lang="ts" setup>
import { ApexOptions } from "apexcharts";

const options = ref<ApexOptions>({});
const series = ref<ApexAxisChartSeries>([
  { name: "hi", data: [{ x: 1, y: 1 }] },
]);
</script>

<template>
  <div>
    <apexchart width="500" type="bar" :options="options" :series="series">
    </apexchart>
  </div>
</template>
```

## Series

> ApexAxisChartSeries

### Single values

```js
data: [23, 34, 12, 54, 32, ... , 43]
categories: ["Jan", "Feb", "Mar", ... , "Dec"]
```

### Paired values

```js
data: [[1, 34]]

data: [{x: 20, y: 54}],

data: [{x: 'Apple', y: 54}],
```

### Timeline Series

```js
data: [[1324508400000, 34]]; // timestamp
data: [{ x: "05/06/2014", y: 54 }]; // date
```

### Data for Pie/Donuts/RadialBars

```js
series: [23, 11, 54, 72, 12],
labels: ["Apple", "Mango", "Banana", "Papaya", "Orange"]
```

```ts
// {date, totalUsers}를 [{x:date,y:totalUsers},...]로

const totalUserSeries: ApexAxisChartSeries = {
  name: "전체 방문수",
  data: data.map((item) => ({ x: item.date, y: item.totalUsers })),
};
```
