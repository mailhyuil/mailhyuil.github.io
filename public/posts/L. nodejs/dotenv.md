# dotenv

> .env 파일을 생성하여 민감한 정보를 환경변수로 넣기
>
> > process.env는 OS의 환경변수
> >
> > > .gitignore 에 .env 반드시 넣어주기!

## install

```
yarn add dotenv
yarn add dotenv-cli
```

## .env

```
# Server Port
PORT=9000
# Connect DataBase
MYSQL_USERNAME=test
MYSQL_PASSWORD=test
MYSQL_DATABASE=slack
MYSQL_HOST=127.0.0.1
MYSQL_DIALECT=mysql
# Mail User Account
MAIL_USER=test@gmail.com
MAIL_PASSWORD=test
# Session Cookie Sign code
SECRET=mycode
```

## dotenv-cli

```
dotenv -e .env.development -- nest start --watch
```

## 사용법

```
import dotenv from 'dotenv'

dotenv.config(); // .env 파일을 읽어온다.
```
