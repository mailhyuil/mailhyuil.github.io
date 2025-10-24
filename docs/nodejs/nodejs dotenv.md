# nodejs dotenv

> .env 파일을 생성하여 민감한 정보를 환경변수로 넣기
>
> > process.env는 OS의 환경변수
> >
> > > .gitignore 에 .env 반드시 넣어주기!
> > >
> > > > frontend 는 빌드 시에, backend는 런타임 시에 환경변수를 읽어온다.

## install

```sh
npm i -D dotenv
npm i -D dotenv-cli
```

## .env

```sh
# Server Port
PORT=3000

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

```sh
dotenv -e .env.development -- nest start --watch
```

## usage

```js
import dotenv from "dotenv";

dotenv.config(); // .env 파일을 읽어온다.
```
