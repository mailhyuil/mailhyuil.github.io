# nginx location match

```sh
# prefix match
location /greet

# exact match
location = /greet

# regex match
location ~ /greet[0-9]

# regex match (대소문자 구분 x)
location ~* /greet[0-9]

# preferential prefix
# prefix와 동일하지만, regex, prefix보다 높은 우선순위를 갖습니다.
location ^~ /greet
```
