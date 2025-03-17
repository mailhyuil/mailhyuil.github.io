# kafka base listeners

## PLAINTEXT

> 보안 없이 kafka 브로커와 통신하기 위한 포트 (e.g. 내부망의 kafka-ui)
>
> > 성능이 좋음
> >
> > > 내부 네트워크에서만 사용해야 함!
> > >
> > > > default: PLAINTEXT://:9092

## CONTROLLER

> cluster를 관리하는 특별한 브로커를 위한 포트
>
> > 토픽, 파티션, 리더 선축, 장애 감지 등의 클러스터 운영을 관리
> >
> > > default: CONTROLLER://:9093

## EXTERNAL

> Kafka 브로커에 외부에서 접근할 수 있도록 하는 포트 (e.g. 외부의 서버에서 kafka 브로커에 접근)
>
> > TLS를 적용해야 함
> >
> > > default: EXTERNAL://:9094
