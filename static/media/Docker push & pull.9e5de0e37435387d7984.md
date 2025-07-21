# Docker push & pull

```bash
# 로그인
docker login --username 아이디

# 이미지에 참조 부여
docker image tag 이미지이름 아이디/이미지이름:태그

# 이미지를 docker hub에 올리기
docker image push 아이디/이미지이름:태그

# 이미지 가져오기
docker image pull
```
