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
        name="email" />
      <ErrorMessage name="email" />
      <Field
        class="px-4 my-4 border-2 rounded shadow-lg text-slate-500 font-bold text-3xl
            hover:ring ring-blue-300 linear duration-200"
        name="name" />
      <ErrorMessage name="name" />
      <Field
        class="px-4 my-4 border-2 rounded shadow-lg text-slate-500 font-bold text-3xl
            hover:ring ring-blue-300 linear duration-200"
        name="password"
        type="password" />
      <ErrorMessage name="password" />
      <button class="bg-blue-500 p-4 rounded">Submit</button>
    </Form>
  </div>
</template>
```

## useForm

> values, handlesubmit .. 리턴
>
> > <Form></Form> 태그 안에 있는 인풋을 values에 담는다. 덕분에 name attribute가 필요 없다.

```
const {
  values: body,
  meta,
  handleSubmit,
  isSubmitting,
} = useForm<ICreateReservationDTO>({
  validationSchema: yup.object({
    visitDate: yup.string().required("방문일자를 선택해 주세요."),
    visitTime: yup.string().required("방문시간을 선택해 주세요."),
  }),
});
```

### values

> values: body라고 하면 values가 const body = ref()안에 자동으로 담긴다.

```
v-model="body.visitTime"
console.log(body);
```

### handleSubmit

> submit을 해주는 함수 콜백을 넣는다
>
> > async 콜백을 사용하여 ajax할 수 있다.

```
const submit = handleSubmit(async (body: ICreateReservationDTO) => {
  console.log(body);

  useFetch<ICreateReservationDTO>(
    `http://localhost:4000/api/v1/reservation/${1}`,
    { method: "POST", body: body }
  );

  emits("update:isOpen", false);
});
```
