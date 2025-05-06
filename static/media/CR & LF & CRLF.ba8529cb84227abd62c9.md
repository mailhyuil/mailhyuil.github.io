# CR & LF & CRLF

## CR : Carriage Return (\r)

> 커서를 가장 앞으로 옮기는 동작

## LF : Line Feed (\n)

> 리눅스의 기본값
>
> > 줄을 바꾸는 동작
> >
> > > 권고

## CRLF (\r\n)

> 윈도우의 기본값
>
> > 줄을 바꾸는 동작

```
console.log("hi\r\nhello"); /// CRLF
console.log("---------");
console.log("hi\nhello"); /// LF
console.log("---------");
console.log("hi\rhello"); ///CR
```
