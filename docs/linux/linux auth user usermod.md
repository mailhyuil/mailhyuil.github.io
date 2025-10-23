# linux cmd usermod

```sh
# -u uid를 1001로 변경
usermod -u 1001 name

# -g gid를 1001로 변경
usermod -g 1001 name

# -d 홈 디렉토리를 /home/name으로 변경
usermod -d /home/name name

# -s 기본 쉘을 /bin/bash로 변경
usermod -s /bin/bash name

# -l 사용자 이름을 name으로 변경
usermod -l name name

# user를 group에 추가
usermod -aG groupname name
```
