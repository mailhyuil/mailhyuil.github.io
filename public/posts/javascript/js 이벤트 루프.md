# 이벤트 루프

> 자바스크립트의 동시성(concurrency)을 지원하기 위한 것
>
> > 브라우저에 내장되어 있는 기능 중 하나
> >
> > > 자바스크립트 *엔진*이 싱글스레드다, *브라우저*는 *멀티스레드*다!

## 자바스크립트 엔진의 2개의 영역

1. 콜 스택
   > 실행 컨텍스트 스택을 일컫는 말
2. 힙
   > 객체가 저장되는 메모리 공간

## 브라우저 환경

1. 태스크 큐
   > 비동기 함수의 콜백 또는 이벤트 핸들러가 일시적으로 보관되는 장소
2. 마이크로태스크 큐
   > 프로미스의 후속 처리 메서드의 콜백함수가 일시적으로 보관되는 장소
   >
   > > 태스크 큐의 콜백보다 우선처리된다.
3. 이벤트 루프
   > 콜 스택에 실행 중인 실행컨텍스트가 있는지, 태스크 큐에 대기 중인 함수가 있는지 반복해서 확인
   > 콜 스택이 비어 있고 태스크 큐에 대기 중인 함수가 있다면 *순차적(First in First out)*으로 콜스택으로 이동시킴
   > 콜 스택으로 이동한 함수는 실행된다.
