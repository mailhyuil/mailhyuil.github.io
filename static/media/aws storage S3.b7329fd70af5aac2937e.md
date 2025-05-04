# S3 (Simple Storage Service)

> 최고의 확장성, 데이터 가용성, 보안 및 성능을 제공하는 객체 스토리지 서비스
>
> > 데이터 레이크, 웹 사이트, 모바일 애플리케이션, 백업 및 복원, 아카이브, 엔터프라이즈 애플리케이션, IoT 디바이스, 빅 데이터 분석 등 다양한 사용 사례에서 원하는 양의 데이터를 저장하고 보호
> >
> > > 이미지, 비디오 파일을 저장하는데 사용된다
> > >
> > > > versioning 설정을 통해서 롤백할 수 있다. (항상 켜두자)

## Pre-signed URL

> 버킷에 접근 할 수 있는 url을 서버에서 받아서 클라이언트로 보내주기

1. 이미지 업로드 요청 시 서버 api 호출
2. 서버에서 AWS S3에 preSignedURL 요청
3. AWS에서 preSignedURL을 return
4. 서버는 브라우저로 preSignedURL을 전달
5. 브라우저에서 AWS preSignedURL로 이미지 upload
6. 서버에게 해당 요청이 종료 되었음을 알림
