# vee-validate & yup

> vue의 validate 라이브러리
>
> > yup으로 schema 설정

## useForm

> form 레벨 유효성 검사
>
> > values, handleSubmit, meta, errors, validate, setValues, isSubmitting 리턴
> >
> > > <Form></Form> 태그 안에 있는 인풋을 values에 담는다. 덕분에 name attribute가 필요 없다.
> > >
> > > > useForm option으로 schema를 넣는다. useForm({validationSchema})

```ts
const {
  values: body,
  handleSubmit,
  meta,
  errors,
  validate,
  setValues,
  isSubmitting,
} = useForm<ISomeDTO>({
  validationSchema: yup.object({
    field1: yup.string().required("field1을 입력해 주세요."),
    field2: yup.string().required("field2를 입력해 주세요."),
  }),
});
```

### values

> values: body라고 하면 values가 const body = ref()안에 자동으로 담긴다.

```
name="username"
v-model="body.visitTime"
```

### handleSubmit

> submit을 해주는 함수 콜백을 넣는다
>
> > field가 전부 valid true가 아니면 작동하지 않는다.

```ts
const submit = handleSubmit(async (body: ICreateReservationDTO) => {
  useFetch<ICreateReservationDTO>(`http://localhost:4000/api/v1/post/`, {
    method: "POST",
    body: body,
  });

  emits("update:isOpen", false);
});
```

### meta

> validation의 메타 데이터

```ts
interface FieldMeta {
  dirty: boolean; // 필드가 업데이트 되었는지
  pending: boolean; // 필드의 validation이 작동 중인지
  touched: boolean;
  valid: boolean; // 유효한지
  initialValue: any; // 필드의 초기값
}
```

### errors

### validate()

### setValues()

> 모든 필드에 value를 넣기

## useField

---

```vue
<script lang="ts" setup>
import { Form, Field, useForm, useField, ErrorMessage } from "vee-validate";
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
