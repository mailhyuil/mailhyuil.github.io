# vee-validate

> vue의 validate 라이브러리

> > yup으로 schema 설정

```vue
<script lang="ts" setup>
import { useForm } from "vee-validate";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .required("이메일을 입력해주세요")
    .email("형식이 맞지 않습니다"),
  name: yup.string().required("이름을 입력해주세요"),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .min(8, "8자리 이상 입력해주세요"),
});

useForm({
  validationSchema: schema,
});
</script>
<template>
  <div class="flex flex-col items-center">
    <h1 class="text-red-500">FormTest</h1>
    <Form :validation-schema="schema" class="flex flex-col">
      <Field
        class="px-4 my-4 border-2 rounded shadow-lg text-slate-500 font-bold text-3xl
            hover:ring ring-blue-300 linear duration-200"
        name="email"
      />
      <ErrorMessage name="email" />
      <Field
        class="px-4 my-4 border-2 rounded shadow-lg text-slate-500 font-bold text-3xl
            hover:ring ring-blue-300 linear duration-200"
        name="name"
      />
      <ErrorMessage name="name" />
      <Field
        class="px-4 my-4 border-2 rounded shadow-lg text-slate-500 font-bold text-3xl
            hover:ring ring-blue-300 linear duration-200"
        name="password"
        type="password"
      />
      <ErrorMessage name="password" />
      <button class="bg-blue-500 p-4 rounded">Submit</button>
    </Form>
  </div>
</template>
```
