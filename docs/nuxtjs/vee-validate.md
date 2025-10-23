# vee-validate & yup

> vue의 validate 라이브러리
>
> > yup으로 schema 설정

## useField

> field 레벨 유효성 검사
>
> > 유효한 상태의 필드를 생성, 커스텀 인풋 컴포넌트 내에서 사용
> >
> > > 하나의 인풋 내에서 유효성을 검사할 때 사용

```ts
const { errorMessage, value } = useField(toRef(props, "name"), yup.string().required().min(8));
```

## useForm

> form 레벨 유효성 검사
>
> > 여러 인풋을 한번에 유효성 검사할 때 사용
> >
> > > validationSchema가 필요 useForm option으로 schema를 넣는다. useForm({validationSchema})
> > >
> > > > values, handleSubmit, meta, errors, validate, setValues, isSubmitting .. 리턴
> > > >
> > > > > input에 name을 무조건 넣어줘야한다.

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

### reactive schema

> 값이 변하는 스키마를 생성할 땐 computed 사용

```js
const schema = computed(() => {
  return yup.object({
    password: yup.string().min(min.value),
  });
});
```

### values

> values: body라고 하면 values가 const body = ref()안에 자동으로 담긴다.

```ts
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

> values에 값 넣기
>
> > 유효성 검사를 할 요소만 들어가있는지 잘 확인해라

```
setValues({...result}) X
setValues({memo:result.value.memo})
```

## displaying errors

> useForm errors 표시하려면 input 대신 Field 사용해서 name을 넣어주기

```
<Field name='name'/>
```

> 아니면 useField() 사용

```
useField(props.name);
<input name='props.name'/>
```

```vue
<script lang="ts" setup>
import { Field, useForm } from "vee-validate";
import * as yup from "yup";
const { values, errors } = useForm({
  validationSchema: yup.object({
    hi: yup.string().required("hi를 입력해주세요"),
  }),
});
</script>
<template>
  <Field class="w-full bg-red-100" name="hi" />
  <h1>{{ errors.hi }}</h1>
</template>
```

```vue
<script lang="ts" setup>
import { Form, Field, useForm, useField, ErrorMessage } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required("이메일을 입력해주세요").email("형식이 맞지 않습니다"),
  name: yup.string().required("이름을 입력해주세요"),
  password: yup.string().required("비밀번호를 입력해주세요").min(8, "8자리 이상 입력해주세요"),
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
        class="px-4 my-4 text-3xl font-bold duration-200 border-2 rounded shadow-lg text-slate-500 hover:ring ring-blue-300 linear"
        name="email"
      />
      <ErrorMessage name="email" />
      <Field
        class="px-4 my-4 text-3xl font-bold duration-200 border-2 rounded shadow-lg text-slate-500 hover:ring ring-blue-300 linear"
        name="name"
      />
      <ErrorMessage name="name" />
      <Field
        class="px-4 my-4 text-3xl font-bold duration-200 border-2 rounded shadow-lg text-slate-500 hover:ring ring-blue-300 linear"
        name="password"
        type="password"
      />
      <ErrorMessage name="password" />
      <button class="p-4 bg-blue-500 rounded">Submit</button>
    </Form>
  </div>
</template>
```

## button disabled 시키기

```
:disabled="!meta.valid"
```
