# @nestjs/axios

## install

```sh
npm i axios
npm i @nestjs/axios
```

## Module import

```ts
@Module({
  imports: [HttpModule],
  providers: [CatsService],
})
export class CatsModule {}
```

## usage

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
