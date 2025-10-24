# encrypt 데이터 & 파일 Age

> GPG를 대체하는 현대 암호화 방식으로 Age를 사용한다.
>
> > 서명 기능은 없다.

## install

```sh
apt install age -y
```

## 암호화

```sh
# 키 생성
age-keygen -o key.txt

# 암호화
age -r AGE_PUBLIC_KEY -o secret.txt.age secret.txt

# 복호화
age -d -i privatekey.txt -o decrypted.txt secret.txt.age
```
