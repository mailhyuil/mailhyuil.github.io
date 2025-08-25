# linux curl vs wget

> wget 과 curl 은 둘 다 웹 서버로부터 컨텐츠를 가져오는 Linux 커맨드입니다.

## wget

> wget은 간단하고 직관적
>
> 재귀적으로 다운로드 (페이지에 있는 모든 파일을 다운로드)
>
> GNU 라이센스
>
> curl보다 오래됨
>
> 별도의 라이브러리 x
>
> > 간단하지만 빠르다

```sh
wget -q -O - http://example.com
```

## curl

> curl은 wget보다 최신 기술
>
> 양방향
>
> ssl 지원
>
> gzip 압축 및 해지 지원
>
> MIT 라이센스
>
> > 조금 더 복잡한 컨텐츠를 다운로드 할 때 유용

```sh
curl http://example.com
```
