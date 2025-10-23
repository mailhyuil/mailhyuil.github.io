# react Form Formik

## install

```sh
npm i formik
```

## usage

```tsx
<Formik
  initialValues={{ name: "", email: "" }}
  validate={values => {
    const errors: Record<string, string> = {};
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  }}
  onSubmit={(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }}
>
  {({ isSubmitting }) => (
    <Form>
      <Field className="border-2 rounded-xl border-gray-500" type="text" name="name" />
      <Field className="border-2 rounded-xl border-gray-500" type="email" name="email" />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  )}
</Formik>
```

```tsx
"use client";

import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import Input from "./components/input";

export default function UserPage() {
  const router = useRouter();
  return (
    <main className="p-5">
      <Formik
        initialValues={{ name: "", email: "" }}
        validate={values => {
          const errors: Record<string, string> = {};
          if (!values.name) {
            errors.name = "이름을 입력해주세요.";
          }
          if (!values.email) {
            errors.email = "이메일을 입력해주세요";
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "허용되지 않는 이메일 형식입니다.";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          router.push("test");
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="flex flex-col gap-3">
            <Input name="name" />
            {errors.name && <div className="text-red-500">{errors.name}</div>}
            <Input name="email" type="email" />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
            <button
              className=" bg-blue-500 disabled:bg-red-500 rounded-lg py-3 font-bold text-2xl text-white"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </main>
  );
}
```
