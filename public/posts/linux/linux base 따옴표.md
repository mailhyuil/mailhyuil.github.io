# linux base 따옴표

> Quoting은 특정 문자나 단어가 쉘에 특수한 의미를 제거하는데 사용된다.
>
> > 예를들어 특수 문자에 대한 특수 처리를 비활성화하고 예약어가 인식되지 않도록하고,
> >
> > > 매개 변수 확장을 방지하는 데 사용할 수 있다.

```sh
' ' # 모든 것을 일반 문자로 인식, 작은 따옴표로 감싸진 문자열은 변화없이 그대로 출력


" " # $(), ` `(벡틱), $ENV_NAME, \ 를 제외하고 일반 문자로 인식


\ # 특수문자 앞에 사용해서 특수문자를 일반 문자처럼 처리


` ` (벡틱) # 명령문의 실행하여 실행결과를 대입
```
