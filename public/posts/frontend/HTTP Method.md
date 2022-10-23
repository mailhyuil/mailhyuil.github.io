# HTTP Method

## GET : 리소스 조회
## POST : 요청 데이터 처리, 주로 데이터 등록에 사용
## PUT : 리소스를 대체, 해당 리소스가 없으면 생성
## PATCH : 리소스를 일부만 변경
## DELETE : 리소스 삭제

## html form tag
> html form tag는 GET, POST만 지원
### html form tag에서 PUT, PATCH, DELETE 사용하기
```
<form action="/hi" method="POST">
    <input type="hidden" name="_method" value="PUT"/>
</form>
```