# 내 컴퓨터의 DNS 캐쉬 초기화 방법 (DNS Flush)

## window

```sh
ipconfig/flushdns
```

## linux

```sh
rndc flush
# 또는
ndc flush
# 또는
/etc/init.d/nscd restart
```
