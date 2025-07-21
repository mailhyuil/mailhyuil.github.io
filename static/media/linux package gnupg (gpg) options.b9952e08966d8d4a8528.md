# linux base gpg (GNU Privacy Guard) options

```sh
gpg --gen-key # 대칭키 생성
gpg --full-gen-key # 비대칭키 생성
gpg --list-keys # 키 목록
gpg --sign-key # 키 서명
gpg --edit-key # 키 서명 변경

gpg --encrypt # 암호화
gpg --decrypt # 복호화

gpg --sign # 서명 사용

gpg --armor # 아스키로 변환
gpg --dearmor # 아스키를 바이너리로 변환

gpg --recipient # 받는 사람의 공개키 (수신자) --encrypt와 같이 사용
```
