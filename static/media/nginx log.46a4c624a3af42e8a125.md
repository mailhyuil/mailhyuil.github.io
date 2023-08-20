# nginx log

## 전역로그

```
access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
```

## 개별로그

> 개별로그를 저장할 디렉토리 생성 sudo mkdir /var/log/nginx/<server 이름>
>
> > server블록 안에 다음을 추가

```
server {
    server_name vompressor.com www.vompressor.com;

    #### 로그 설정 ####
    access_log /var/log/nginx/vompressor/access.log;
    error_log /var/log/nginx/vompressor/error.log;

    location / {
    }

    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
}
```

## 로그포멧

```
$remote_user HTTP Authorization 접속시 접속한 유저
$remote_addr 방문자 IP
$time_local 요청을 처리한 서버 시간
$status HTTP 응답코드
$request 클라이언트 요청
$http_user_agent 클라이언트가 사용한 브라우저
$http_referer 해당 페이지 이전에 거쳐온 URL
$body_bytes_sent 보낸 데이터 크기 (byte)
$http_x_forwarded_for 프록시 서버를 거치기 전의 접속 IP
$request_time 요청을 처리하는데 걸린시간
$connection 로그를 남길 당시의 커넥션 수
```

### 사용

```
access_log <로그 경로> <포맷 이름>;
```

## 에러로그

```
info - 정보
notice - 정상
warn - 경고
error - 프로세스 처리 에러
crit - 프로새스에 영향을 주는 오류
alert - 프로새스에 심각한 영향을 주는 오류
emerg 서비스 불가 수준 오류 - 설정, syntax등이 잘못된 경우
debug 디버그 정보
```

### 사용

```
error_log <에러로그 경로> <에러로그 레벨>
```
