# linux cmd swap

```sh
# swap 메모리 확인
free -h
# swap 비활성화
swapoff -a
# swap 활성화
swapon -a

# swap 파티션 생성
mkswap /dev/sda1
# swap 파티션 활성화
swapon /dev/sda1
# swap 파티션 비활성화
swapoff /dev/sda1
```
