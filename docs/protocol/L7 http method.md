# L7 http method

## GET : 리소스 조회

## POST : 요청 데이터 처리, 주로 데이터 등록에 사용

## PUT : 리소스를 대체, 해당 리소스가 없으면 생성

## PATCH : 리소스를 일부만 변경

## DELETE : 리소스 삭제

## OPTIONS : 서버가 지원하는 HTTP 설정을 확인하기 위한 메소드

> Preflight 요청

## HEAD : GET과 동일하지만, body를 제외한 헤더 정보만 반환

> 리소스의 존재 여부 확인
>
> 콘텐츠 크기 확인
>
> 캐싱 관련 정보 확인 (Expires, Cache-Control, ETag, Last-Modified)
>
> 서버 상태 확인
