# linux 순차 실행

> &&, ;, ||, {}

## &&

> 앞의 명령어가 성공한 후에만 다음 명령어가 실행

```bash
npm i && npm run build
```

## ||

> 앞의 명령어가 실패하면 뒤의 명령어를 실행

```sh
npm i || echo 'npm install failed'
```

## ;

> 앞의 명령어가 성공하든 실패하든 뒤의 명령어를 실행

```bash
npm i ; npm run build
```

## {}

> 명령을 그룹핑
>
> > &&, ;, ||를 사용 시 명령어를 그룹핑하여 실행

```sh
mkdir test3 && { cd test3; touch abc; echo 'success!!' } || echo 'There is no dir';
```
