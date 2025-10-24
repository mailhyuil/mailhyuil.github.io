# encrypt 데이터 & 파일 & 서명 GPG - PGP

> 문서, 이메일, 파일 같은 정적인 것을 암호화하고 서명하는 데 최적화된 비동기 비대칭 암호화 방식
>
> > 반면 TLS는 동적인 것에 최적화된 대칭 암호화 방식이다.

## install

```sh
apt install gnupg -y
```

## usage

```sh
# 키 생성
gpg --full-generate-key

# 키 목록
gpg --list-keys         # 공개키 목록
gpg --list-secret-keys  # 비밀키 목록

# 공개키 내보내기 (user@example.com은 식별자(uid) 역할)
gpg --armor --export user@example.com > pubkey.asc
# 공개키 가져오기
gpg --import pubkey.asc
# 비밀키 내보내기 (user@example.com은 식별자(uid) 역할)
gpg --export-secret-keys --armor user@example.com > private.asc
# 비밀키 가져오기
gpg --import private.asc

# 암호화
gpg --encrypt --recipient user@example.com 파일이름.txt

# 복호화
gpg --output 복호화된파일.txt --decrypt 파일이름.txt.gpg
```

## 서명

```sh
# 서명
gpg --clear-sign important.txt         # 사람이 읽을 수 있는 서명
gpg --detach-sign important.txt        # 별도 .sig 파일 생성
gpg --armor --detach-sign important.txt  # ASCII-armored 서명

# 검증
gpg --verify important.txt.sig important.txt


```
