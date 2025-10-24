# rust base install

> Visual Studio Build Tools를 설치해야 빌드 가능

## rustup

```sh
# 버전 확인
rustup --version

# 최신버전으로 업데이트
rustup update

# 삭제
rustup self uninstall

# 로컬에 저장된 러스트 documentation을 읽는 법
rustup doc
```

## \*.rc

> 러스트 파일의 확장자는 .rc
>
> > 스네이크 케이스를 사용 hello_world.rc

### main.rc

```rs
fn main(){
    println!("Hello World!")
}
```

### rustc

> 러스트 컴파일러
>
> > .exe 생성
