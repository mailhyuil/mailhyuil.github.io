# class-validator

> dto를 유효성 검사하는 라이브러리
>
> > 데이터가 validate를 받아야만 controller로 값이 넘어간다.

## install

```sh
npm install class-validator --save
```

## usage

```ts
export class Post {
  @Length(10, 20)
  title: string;

  @Contains("hello")
  text: string;

  @IsInt()
  @Min(0)
  @Max(10)
  rating: number;

  @IsEmail()
  email: string;

  @IsFQDN()
  site: string;

  @IsDate()
  createDate: Date;
}

let post = new Post();
post.title = "Hello"; // should not pass
post.text = "this is a great post about hell world"; // should not pass
post.rating = 11; // should not pass
post.email = "google.com"; // should not pass
post.site = "googlecom"; // should not pass

validate(post).then((errors) => {
  // errors is an array of validation errors
  if (errors.length > 0) {
    console.log("validation failed. errors: ", errors);
  } else {
    console.log("validation succeed");
  }
});

validateOrReject(post).catch((errors) => {
  console.log("Promise rejected (validation failed). Errors: ", errors);
});
// or
async function validateOrRejectExample(input) {
  try {
    await validateOrReject(input);
  } catch (errors) {
    console.log("Caught promise rejection (validation failed). Errors: ", errors);
  }
}
```
