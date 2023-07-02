# catchError

> 옵저버블 스트림에서 에러가 발생했을 때 이를 처리하는 연산자
>
> > 스트림 내에서 잡아내고 계속해서 실행을 유지
> >
> > > subscribe내의 error는 에러를 처리하고 스트림을 종료

## rxjs catchError return of(null)

> return null과 같다
>
> > rxjs에서는 of()안에 담아서 리턴해야함

```
  catchError(() => {
                this.toastService.show('로그인을 해주세요.');
                this.router.navigateByUrl('login');
                return of(null);
              })
```
