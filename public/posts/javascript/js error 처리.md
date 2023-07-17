# js error 처리

> status는 프론트엔드에서 받을 때
>
> > statusCode는 백엔드에서 보낼 때 설정

## error status

```js
if (err.status === 404) {
}
```

## error instance

> 에러 객체를 확장해서 사용하자!

```js
if (error instanceof URIError) {
}
```

## custom error

```js
// 인터페이스는 컴파일되면 자바스크립트에서 사라지기 때문에 err instanceof CusomError 가 불가능하게 된다.
// 그래서 컴파일되도 남아있는 클래스를 타입으로 이용하는 방법을 쓰는 것이다.
class CustomError extends Error {
   response?: {
      data: any;
      status: number;
      headers: string;
   };
}

try {
   await axios.get('/user/12345');
} catch (err: unknown) {
   if (err instanceof CustomError) {
      console.error(err.response?.data);
   }
}
```
