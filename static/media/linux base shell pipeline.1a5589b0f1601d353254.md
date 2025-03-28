# linux base pipeline

```sh
cat <<EOF
apt update
apt install -y \
    package-bar \
    package-baz \
    package-foo
EOF
```
