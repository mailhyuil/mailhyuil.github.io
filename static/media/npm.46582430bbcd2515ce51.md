# npm

## npx

> npx 는 패키지를 임시 설치해서 "실행"하는 용도입니다!

## degit

> git 저장소를 쉽게 다운로드 받을 수 있는 패키지

```
npm i degit
```

## --save

> --save 옵션은 package.json의 dependency 항목에 모듈을 추가한다는 의미
>
> > node_modules에 직접 추가하는게 아니라 dependency로 추가 npm에서 다운받아줌
> >
> > > npm5 부터는 --save 옵션을 기본 옵션으로 적용

## login

```
npm login

npm whoami // 로그인이 되었는지 확인
```

## package 업로드

> 한번 publish를 하고 업데이트 하려면 버전 넘버를 올려줘야한다.

```
npm publish --access=public
```
