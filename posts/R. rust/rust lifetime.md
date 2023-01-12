# 러스트 라이프타임

> 허상 포인터를 방지하기 위한 러스트의 기능
>
> > borrow checker로 검사 가능
> >
> > > 'static은 정해져있는 키워드
> > >
> > > > 라이프타임 명시가 하는 것은 여러 개의 참조자에 대한 라이프타임들을 서로 연관 짓도록 하는 것입니다.

## 허상 포인터(Dangling pointer)

> 객체에 대한 참조가 포인터 값에 대한 수정 없이 삭제되거나 할당 해제돼서 포인터가 계속 할당 해제된 메모리를 가리킬 때

```
&i32        // a reference
&'a i32     // a reference with an explicit lifetime
&'a mut i32 // a mutable reference with an explicit lifetime
```

```
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}
```
