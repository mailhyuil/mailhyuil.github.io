# load testing jmeter

> jmeter 에서 다운로드
>
> > /bin/jmeter.bat 실행
> >
> > > 423 Too Many Request 에러를 피하기 위해서 서버에서 Throttling을 꺼주거나 test용 token등의 방법을 사용해야함

## workflow

```txt
Thread Group 생성
HTTP Request 생성
View Results Tree 생성
실행
```

## Thread Group

> 테스트에 사용될 쓰레드 개수(사용자 개수)를 설정

```txt
Number of Threads (users): 100 # 사용자 개수
Ramp-Up Period (in seconds): 1 # 사용자가 증가하는 시간 (100명까지 1초씩 증가)
Loop Count: 1 # 총 반복 횟수 (-1: 무한)
```

## Sampler

> 사용자가 수행할 액션
>
> > (e.g. HTTP Request)

## Listener

> 결과를 보여주는 컴포넌트
>
> > (e.g. View Results Tree)
