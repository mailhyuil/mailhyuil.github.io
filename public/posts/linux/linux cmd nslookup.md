# nslookup

```sh
# 도메인의 "DNS 레코드"를 검색
nslookup example.com

# "NS서버 레코드"를 검색
nslookup -type=ns example.com

# cname 확인
nslookup -q=cname example.com
```
