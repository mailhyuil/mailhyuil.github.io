# RESTful url

> 복수형을 사용하자
>
> > 종속된 entity를 뒤에 붙이자

```txt
/users                   # findAllUsers
/users/:id               # findUserById
/users/:id/posts         # findAllPostByUserId
/users/:id/posts/:postId # findPostOfUserById
```
