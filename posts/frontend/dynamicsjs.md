# dynamics.js

## install

```
yarn add dynamics.js
```

## 사용법

```
<script lang="ts" setup>
import dynamics from "dynamics.js";

const btn = ref(null);

const mouseEnter = () => {
  dynamics?.animate(
    btn.value,
    {
      scale: 2,
    },
    {
      type: dynamics.spring,
      frequency: 200,
      friction: 200,
      duration: 1000,
    }
  );
};
const mouseLeave = () => {
  dynamics?.animate(
    btn.value,
    {
      scale: 1,
    },
    {
      type: dynamics.spring,
      frequency: 200,
      friction: 200,
      duration: 1000,
    }
  );
};
</script>
<template>
  <div>
    <div ref="div" class="flex flex-col items-center h-screen bg-blue-200">
      <button ref="btn" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        안녕하세요
      </button>
    </div>
  </div>
</template>
```
