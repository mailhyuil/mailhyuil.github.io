# L7 http RestAPI RESTful

> RESTful 원칙을 지키는 API

## request

> 마지막 / 를 붙이지 않는다.
>
> 항상 소문자를 사용한다.
>
> 항상 복수형을 사용한다.
>
> 명령어는 동사를 사용한다.
>
> 케밥케이스를 사용한다.
>
> 파일 확장자를 쓰지 말아라
>
> 함수명을 쓰지 말아라
>
> 필터를 위해 쿼리 파라미터를 사용해라.

```sh
users/:userId
users/:userId/posts
users/search
```

## response

> relation은 중첩구조로 표현해야한다. DTO단에서 Transform하지 말아라
>
> > 메타데이터는 headers에 담아라 (request에 include=metadata를 추가해라)
> >
> > pagination header, link header

```sh
Link: <https://api.github.com/repositories/1300192/issues?page=2>; rel="prev",
<https://api.github.com/repositories/1300192/issues?page=4>; rel="next",
<https://api.github.com/repositories/1300192/issues?page=515>; rel="last",
<https://api.github.com/repositories/1300192/issues?page=1>; rel="first"

X-Pagination: { "total": 1030, "limit": 20, "offset": 0 }
```
