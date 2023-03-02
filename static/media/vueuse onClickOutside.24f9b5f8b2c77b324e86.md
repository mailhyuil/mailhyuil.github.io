# vueuse onClickOutside

```
import {onClickOutside} from "@vueuse/core";
const details = ref();
onClickOutside(details, (event: any) => {
   details.value.forEach((e) => e.removeAttribute("open"));
});
</script>
<template>
   <div>
      <details
         v-for="i of [1, 2, 3, 4]"
         ref="details">
         <summary>hi</summary>
         <div class="bg-red-500">dasfasdf</div>
      </details>
   </div>
</template>
```
