# nuxt useFetch

## return

### data

### pending

### refresh

> 데이터를 다시 fetch하여 리렌더링
>
> > 안먹히면 async가 잘 됐는지 확인

### execute

### error

## options

### method

### query, params, body, headers

### server

### lazy

### basedURL

### watch

> query: ref.value, 객체를 query 넣은 뒤
>
> > useFetch는 요청 url을 키값으로 캐시저장하기때문에 사용

```
const { data: users, refresh: usersRefresh } = await useApiFetch.get(
  "/analytics/users",
  {
    method: "GET",
    query: usersDate.value, // 객체 자체를 넣어줘라
    watch: [usersDate.value],
  }
);
```

## interceptors 생성

> options 내에 넣기
