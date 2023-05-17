# @nestjs/axios

## install

```
npm i --save @nestjs/axios axios
```

## Module import

```ts
@Module({
  imports: [HttpModule],
  providers: [CatsService],
})
export class CatsModule {}
```

## 사용법

```ts
findAll(): Observable<AxiosResponse<Cat[]>> {
  return this.httpService.get('http://localhost:3000/cats');
}
```

## axiosRef

> axios 베이스에 접근하게 해준다.

```ts
const { data, request } = await this.httpService.axiosRef.post("https://api-identity.infrastructure.cloud.toast.com/v2.0/tokens", body, {
  headers: {
    "Content-Type": "application/json",
    "X-Container-Meta-Access-Control-Allow-Origin": "*",
  },
});
```
