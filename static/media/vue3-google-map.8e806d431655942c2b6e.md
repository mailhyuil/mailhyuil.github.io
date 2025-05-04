# vue3-google-map

## install

```
npm i vue3-google-map
```

## usage

```vue
<script lang="ts" setup>
import { GoogleMap, Marker } from "vue3-google-map";
const center = ref({ lat: 40.689247, lng: -74.044502 });
</script>
<template>
  <GoogleMap api-key="AIzaSyD6RuC06jmaHoU4_7AkkGHoFrgHHCoYtzs" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>
```
