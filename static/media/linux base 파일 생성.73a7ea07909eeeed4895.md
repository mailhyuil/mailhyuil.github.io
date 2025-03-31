# linux 파일 생성

## echo 사용

```sh
echo hello > hello.txt
```

## cat <<EOF pipelining

```sh
cat <<EOF
hello
EOF
```

## cat <<EOF pipelining with filename

```sh
cat <<EOF > hello.txt
hello
EOF
```

## cat <<EOF pipelining shortcut

```sh
cat > hello.txt
hello # (입력 후 ctrl + d)
```
