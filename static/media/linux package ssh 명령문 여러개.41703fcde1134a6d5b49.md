# linux ssh 명령문 여러개

```sh
ssh -i key.pem ubuntu@remove_server << ENDSSH
echo hello
echo world
ENDSSH
```
