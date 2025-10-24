# Docker run options

```sh
-i # stdin을 활성화, 명령어를 넣을 수 있게 됨
-t # 터미널 사용, 쉘을 사용하기 위해서 넣어줘야함, docker attach가 가능해짐
-d # background 모드
-v # volume 사용
-p # port forwarding
--rm # stop 시 삭제
--restart # 컨테이너 재시작 정책
--privileged # 특권 모드
-u 0 # root로 실행
```
