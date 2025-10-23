# vee-validate resetForm

> value에 값이 안담기면 당연히 리셋도 안된다

```vue
<script lang="ts" setup>
import { useForm } from "vee-validate";
import * as yup from "yup";
const { values, resetForm, setValues } = useForm({
  validationSchema: yup.object({
    title: yup.string().required("타이틀을 입력해주세요."),
  }),
});
// values에 값을 담아줘야 reset도 된다
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  values.title = target.value;
};
</script>
<template>
  <div>
    <input class="w-full border rounded-lg" name="title" @input="onInput($event)" :value="values.title" />
    <button @click="resetForm()">hi</button>
  </div>
</template>
```
