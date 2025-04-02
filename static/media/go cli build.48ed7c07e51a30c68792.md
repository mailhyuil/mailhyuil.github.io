# go cli build

## options

```sh
-ldflags	링커 단계: 변수 주입, 디버그 정보 제거
-gcflags	컴파일러 최적화 옵션
-tags	    조건부 빌드 (build tag)
-race	    데이터 레이스 탐지 # 멀티스레드 안전성 검증할 때 필수!
-o	        출력 파일 이름
-mod	    의존성 모드 제어
-a	        강제 전체 재빌드 # 캐시 무시
-v	        빌드 중 패키지 출력 (verbose)
-trimpath	경로 정보 제거 (보안, 캐시 무결성용) # 바이너리 안에 GOPATH, 소스 경로 안 남음
```

## usage

```sh
# -ldflags 옵션으로 디버그 정보 제거 등 성능 튜닝 가능
go build -ldflags="-s -w" -o app

# -gcflags 옵션으로 escape analysis 확인 가능
# -m 옵션으로 escape analysis 결과 확인
# -m=2 옵션으로 escape analysis 결과를 더 자세히 확인
go build -gcflags="-m main.go"
```

## 개발용 빌드

> 최적화 하지 않고 빠르게 빌드
>
> > 디버그 정보 포함

```sh
go build
```

## 배포용 빌드

> 최적화 및 디버그 정보 제거

```sh
go build -ldflags "-s -w" -trimpath -o myapp

upx myapp
```
