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

## series

> ApexAxisChartSeries

```ts
// {date, totalUsers}를 [{x:date,y:totalUsers},...]로

const totalUserSeries: ApexAxisChartSeries = {
  name: "전체 방문수",
  data: data.map((item) => ({ x: item.date, y: item.totalUsers })),
};
```
