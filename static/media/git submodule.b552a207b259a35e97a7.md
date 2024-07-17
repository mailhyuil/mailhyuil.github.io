# git submodule

> 인터페이스 같은 프론트와 백엔드에서 공통으로 정의될 것들을 submodule로 만든다

## submodule add

```sh
git submodule add <submodule-url>
```

## .gitmodules

> .gitmodules 파일에 아래 내용이 추가된다.

```sh
[submodule "sample-submodule"]
    path = sample-submodule
    url = https://github.com/user-id/sample-submodule
```

## submodule clone

> 메인 깃을 클론하면 submodule은 기본으로 비어있다
>
> > 그래서 두가지 명령어를 사용해주어야 한다.

```sh
# 서브모듈 정보를 기반으로 로컬 환경설정 파일을 만들어준다.
git submodule init

# 서브모듈의 리모트 저장소에서 데이터를 가져오고 Checkout을 한다.
git submodule update
```

## submodule remove

```sh
git submodule deinit <your_submodule>
git rm <your_submodule>
git commit-m "Removed submodule"
rm -rf .git/modules/<your_submodule>
```

## submodule 명령어 한 번에 실행하기

```sh
git submodule foreach 'git pull'
```
