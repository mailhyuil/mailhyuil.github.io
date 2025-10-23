# nginx directive proxy_set_header

```conf
location / {
  proxy_set_header Some $some; # client의 some header를 그대로 전달
  proxy_set_header Some $proxy_some; # proxy server의 some header를 그대로 전달
  proxy_set_header Some $proxy_add_some; # proxy server의 some header를 추가하여 전달

  proxy_pass http://backend;
}
```
