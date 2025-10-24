# react form react-hook-form

## install

```sh
npm i react-hook-form
npm i zod
```

## usage

```tsx
import { useForm, SubmitHandler } from "react-hook-form";

export const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상 입력해줘"),
  email: z.string().email("이메일 형식이 아님"),
  phone: z
    .string()
    .optional()
    .transform(v => (v ?? "").trim())
    .refine(v => v === "" || /^[0-9\-+() ]{7,20}$/.test(v), "전화번호 형식이 아님"),
  topic: z.enum(["general", "support", "sales"], { required_error: "주제를 선택해줘" }),
  message: z.string().min(10, "메시지는 10자 이상"),
  agree: z.literal(true, { errorMap: () => ({ message: "개인정보 동의가 필요해" }) }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "general",
      message: "",
      agree: false,
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ContactFormValues> = data => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
```
