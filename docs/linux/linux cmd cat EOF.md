# linux cmd cat EOF

## `cat <<EOF pipelining`

```sh
cat <<EOF
hello
EOF
```

## `cat <<EOF pipelining with filename`

```sh
cat <<EOF > hello.txt
hello
EOF
```

## shortcut

```sh
cat > hello.txt
hello # (입력 후 ctrl + d)
```
