# aws Lambda

> you must also use S3 to host the files and API Gateway to expose the API over HTTP.

## trigger

> lambda function을 실행시키는 트리거가 될 서비스를 정하기

```txt
s3, dynamoDB, api gateway, sqs ...
```

## cloudwatch

> 람다 함수 실행 로그를 볼 수 있음

## 패키지 사용하기

> "node_modules"와 "index.mjs" 파일을 zip 파일로 압축시켜서 업로드
>
> > 응답 헤더("Content-Type": "application/json")를 넣지 않으면 다운로드 돼버린다.

```ts
import dayjs from "dayjs";

export const handler = async event => {
  const currentDate = dayjs().format("YYYY-MM-DD");

  const response = {
    statusCode: 200,
    body: JSON.stringify({ date: currentDate }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return response;
};
```

## 람다함수를 처리한 뒤 리디렉션

```ts
export const handler = async event => {
  // logic..
  const response = {
    statusCode: 302, // 302 리디렉션 코드
    statusDescription: "Found",
    headers: {
      location: { value: "redirection_url" }, // 리디렉션할 url
    },
  };
  return response;
};
```
