# app.locals & req.app.locals & res.locals

> res.user, res.locals.user 뭘 쓰든 상관없다
> 하지만 view engine을 사용할 때는 res.locals를 사용해야한다.

```
import {Request, Response} from 'express';
```

## app.locals

> 여기 저장된 값은 앱의 생명주기 동안 유지된다.

## res.locals

> 여기 저장된 값은현재 요청과 관련된 로컬 변수를 저장할 때 사용
>
> > 이 미들웨어보다 밑에 달린 미들웨어에서 전부 접근 가능

## req.app.locals

> app.의 지역변수를 사용할 수 있게 해준다.
