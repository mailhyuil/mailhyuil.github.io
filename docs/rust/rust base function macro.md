# rust base macro

> 컴파일 시에 코드를 변환, 확장하는 함수
>
> > 함수명 뒤에 !가 붙는다.
> >
> > e.g. println!()
> >
> > > 컴파일 시에 변환을 하기에 더 유연한 코드를 작성할 수 있다. (e.g. 매개변수 개수가 가변적인 경우)

## 매크로 생성

```rs
macro_rules! my_print {
    ($msg:expr) => {
        println!("My Print: {}", $msg);
    };
}

fn main() {
    my_print!("Hello, Macros!");  // 출력: My Print: Hello, Macros!
}
```
