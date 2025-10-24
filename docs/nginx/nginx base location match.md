# nginx base location match

```sh
# prefix match
location /greet

# exact match
location = /greet
location != /greet

# regex match
location ~ /greet[0-9]
location !~ /greet[0-9]

# preferential prefix
# prefix와 동일하지만, regex, prefix보다 높은 우선순위를 갖습니다.
location ^~ /greet

# regex match (대소문자 구분 x)
location ~* /greet[0-9]
location !~* /greet[0-9]

# 파일 존재 테스트
location -f /greet
location !-f /greet
# 디렉토리 존재 테스트
location -d /greet
location !-d /greet
# 파일 또는 디렉토리, 심볼릭 링크 존재 테스트
location -e /greet
location !-e /greet
# 실행 가능한 파일 테스트
location -x /greet
location !-x /greet
```
