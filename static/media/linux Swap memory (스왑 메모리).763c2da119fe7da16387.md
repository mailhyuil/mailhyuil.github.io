# Swap memory (스왑 메모리)

- 실제 메모리 Ram이 가득 찼지만 더 많은 메모리가 필요할 때
- 디스크 공간을 이용하여 부족한 메모리를 대체할 수 있는 공간
- 실제 메모리가 아닌 하드디스크를 이용하기에 속도가 느리다

## 스왑 메모리 확인

```bash
free -h
swapon -s
```

## 스왑 메모리 추가

1. swap 메모리를 swap 파일로 포맷

```bash
sudo dd if=/dev/zero of=/swapfile bs=1024 count=200000
```

```bash
sudo mkswap swapfile
```

## 스왑 메모리 활성화

```bash
# 단일 swap 메모리 on
sudo swapon swapfile
# 모든 swap 메모리 on
swapon -a
```

## 스왑 메모리 비활성화

```bash
# 단일 Swap 메모리 off
sudo swapon swapfile
# 모든 Swap 메모리 off
swapon -a
```

## 스왑 메모리 삭제

```
sudo rm -r swapfile
```

## Swap 메모리 시스템이 재시작되더라도 활성화

```
# 파일시스템 설정
sudo vi /etc/fstab

# 맨 아래에 다음 라인 추가
...
...
# 마지막 행에 추가, 시스템이 재시작되더라도 활성화
/swapfile swap swap defaults 0 0
```
