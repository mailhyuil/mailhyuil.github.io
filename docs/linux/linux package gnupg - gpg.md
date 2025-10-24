# linux package gnupg - gpg

> 개인 정보 및 파일을 암호화하고 디지털 서명을 생성하는 데 사용되는 오픈 소스 암호화 도구
>
> > 메시지, 파일을 공개키로 암호화, 공개키를 가진 사람만 복호화 가능

## install

```sh
apt install gnupg -y
```

## usage

```sh
# 비대칭키 생성
gpg --full-gen-key
# 대칭키 생성
gpg --gen-key --symmetric

# 키 목록
gpg --list-keys
# 키 서명
gpg --sign-key sangbaeku300@gmail.com
# 키 서명 수정
gpg --edit-key mailhyuil@gmail.com

# 폐기 인증서 생성
# 폐기 인증서만 있다면 누구든지 공개키를 폐기할 수 있으므로 안전한 곳에 보관 하여야 한다.
gpg --output hyuil.revoke.asc --gen-revoke mailhyuil@gmail.com

# 공개키 내보내기
gpg --export --armor --output hyuil.pub mailhyuil@gmail.com
# 공개키 가져오기
gpg --import hyuil.pub
# 개인키 내보내기
gpg --output hyuil.secret.gpg --armor --export-secret-key --export-options export-backup mailhyuil@gmail.com
# 개인키 가져오기
gpg --import hyuil.secret.gpg

# 암호화
echo "Hello World!" > test.txt
gpg --encrypt --output test.txt.gpg --armor --recipient mailhyuil@gmail.com test.txt
# 서명 후 암호화 (더 강력)
gpg --encrypt --sign --output test.txt.sign.gpg --armor --recipient mailhyuil@gmail.com test.txt

# 복호화
gpg --decrypt --output test.txt test.txt.gpg
gpg --decrypt --output test.txt test.txt.sign.gpg
```
