# linux network DNS cache 초기화

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
