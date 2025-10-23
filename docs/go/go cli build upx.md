# go cli build upx

> 바이너리 파일을 압축하여 용량을 줄이는 방법
>
> > 파일의 크기가 줄어들어 disk 사용량이 줄어들고, 네트워크 전송 속도가 빨라짐 (CI/CD 배포 속도 빨라짐)
> >
> > > 하지만 실행 시 압축 해제 시간이 포함되므로, 초기 로딩 속도가 느려짐, 메모리 사용량 증가

## install

```sh
brew install upx
choco install upx
apt install upx-ucl
```

## usage

```sh
# 압축 (일반)
upx <binary file>
# 압축 (중간 압축)
upx --best <binary file>
# 압축 (최대 압축)
upx --ultra-brute <binary file>

# 압축 해제
upx -d <binary file>
```
