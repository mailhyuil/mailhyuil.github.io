# swap memory (스왑 메모리)

> RAM의 용량이 부족할 때 사용할 수 있는 대체 메모리
>
> 디스크 공간을 이용하여 부족한 메모리를 대체할 수 있다.
>
> RAM 메모리가 아닌 디스크를 이용하기에 속도가 느리다

## 스왑 메모리 확인

```bash
free -h # 메모리 확인
swapon -s # 스왑 메모리 확인
```

## 스왑 메모리 추가

> swap 메모리를 swap 파일로 포맷

```bash
dd if=/dev/zero of=/<swap_memory_file> bs=1024 count=200000 # 200MB의 스왑 파일 생성
mkswap <swap_memory_file> # 스왑 파일 포맷
```

## 스왑 메모리 활성화/비활성화

```bash
swapon <swap_memory_file> # 단일 swap 메모리 on
swapon -a # 모든 swap 메모리 on

swapoff <swap_memory_file> # 단일 swap 메모리 off
swapoff -a # 모든 swap 메모리 off
```

## Swap 메모리 시스템이 재시작되더라도 활성화

```sh
# 파일시스템 설정
vi /etc/fstab

# 맨 아래에 다음 라인 추가
/<swap_memory_file> swap swap defaults 0 0
```
