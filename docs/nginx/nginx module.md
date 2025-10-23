# nginx module

```sh
# 모듈 설치
sudo apt install nginx-module-brotli
# 모듈 로드
load_module modules/ngx_http_brotli_filter_module.so;
# restart
sudo systemctl restart nginx
# 설치된 모듈 확인
nginx -V 2>&1 | grep --color=auto module
```
