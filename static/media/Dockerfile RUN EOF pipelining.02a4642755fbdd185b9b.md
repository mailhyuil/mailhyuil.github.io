# Dockerfile RUN pipeline

```Dockerfile
RUN <<EOF
apt update
apt install -y \
    package-bar \
    package-baz \
    package-foo
EOF
```
