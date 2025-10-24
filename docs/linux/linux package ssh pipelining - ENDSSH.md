# linux package ssh pipelining - ENDSSH

```sh
ssh -i key.pem ubuntu@remove_server << ENDSSH
echo hello
echo world
ENDSSH
```
