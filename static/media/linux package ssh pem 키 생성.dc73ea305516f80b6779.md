# ssh pem 키 생성

> 서버에서 진행

```sh
ssh-keygen -t rsa -b 2048 -m PEM -f ~/.ssh/<name>.pem

cat ~/.ssh/<name>.pem.pub >> ~/.ssh/authorized_keys

# 생성 된 pem 키 사용 (chmod 600 해주기)
```
