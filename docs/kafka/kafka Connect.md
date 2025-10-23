# kafka Connect

> Kafka와 외부 시스템(데이터베이스, 파일, 클라우드 서비스 등)을 쉽게 연결할 수 있도록 도와주는 프레임워크
>
> > Kafka를 직접 프로그래밍하지 않고도, DB, 클라우드, 파일 시스템 등과 쉽게 연결할 수 있도록 도와준다.

## Source Connector

> 외부 시스템(DB, 클라우드, 파일 시스템 등)에서 데이터를 가져와 Kafka로 전송하는 역할
>
> > e.g. database의 테이블을 모니터링하여 변경된 데이터를 받아서 Kafka로 전송

## Sink Connector

> Kafka에서 데이터를 가져와 외부 시스템으로 전송하는 역할
>
> > e.g. kafka에 저장된 데이터를 database에 가공하여 저장
