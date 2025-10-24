# rust package cargo

> 러스트의 빌드 시스템이자 패키지 관리자

```sh
cargo --version
```

## 프로젝트 생성

```sh
cargo new <project_name>
```

## Cargo.toml

> 카고의 설정 파일
>
> > dependency 설정
> >
> > > rust에서는 이런 패키지 or dependency를 크레이트라고 부른다

## build

> build를 하면 실행파일은 ./target/debug/ 경로에 생성된다

```sh
cargo build
```

## build --release

> 릴리즈를 위한 빌드는 옵션 --release를 달아준다
>
> > ./target/release 경로가 생성
> >
> > > 러스트 코드 실행은 빨라지지만 컴파일이 오래걸린다

```sh
cargo build --release
```

## run

> 실행시켜주는 명령어
>
> > 자동으로 빌드를 하고 실행시켜준다

```sh
cargo run
```

## fmt

> 러스트 코드를 포매팅한다.

### install

```sh
rustup component add rustfmt
```

### usage

```sh
cargo fmt
```

## fix

> 컴파일러의 권고를 자동으로 코드에 적용시킨다.

```sh
cargo fix
```

## clippy

> 린트 사용

### install

```sh
rustup component add clippy
```

### usage

```sh
cargo clippy
```
