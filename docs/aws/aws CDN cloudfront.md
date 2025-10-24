# aws CDN cloudfront

> 생성 후 policy를 복사하여 s3 버킷에 붙여넣기
>
> > `cloudfront_domain/<s3-resource-location>`로 접근 가능

## Origin

> 원본 서버를 설정해서 요청을 Origin 서버로 전달
>
> > (e.g. s3, ec2, elb ...)

## Viewer

> 클라이언트
>
> > (e.g. browser, mobile ...)

## Behavior

> Viewer가 Origin에 요청을 보내는 방식을 정의
>
> > (e.g. protocol, cache, header, path, compress ...)
> >
> > > Function Associations를 통해 cloudfront functions나 lambda@edge를 사용하여 요청/응답을 조작할 수 있음
