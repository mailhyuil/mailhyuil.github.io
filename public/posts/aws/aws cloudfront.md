# aws cloudfront

> aws cdn
>
> > 생성 후 policy를 복사하여 s3 버킷에 붙여넣기
> >
> > > cloudfront_domain/<s3-resource-location>로 접근 가능

## 뷰어 요청

> 클라이언트와 클라우드 프론트 사이의 요청

## 원본 요청

> 클라우드 프론트와 원본 서버(s3, 로드밸런서 ...) 사이의 요청

## hit & miss

### hit

> 참조하고자 하는 메모리가 캐시에 존재하고 있을 경우 Cache Hit

### miss

> 메모리가 캐시에 존재하지 않을 때 Cache Miss라고 한다.

### http header

```txt
x-cache: hit from cloudfront
x-cache: miss from cloudfront
```
