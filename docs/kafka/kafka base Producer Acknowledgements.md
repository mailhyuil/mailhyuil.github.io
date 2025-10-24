# kafka base Producer Acknowledgements

> producer가 메세지를 보내고 나서 broker로부터 ack를 받는 방식을 설정하는 옵션
>
> > acks란 broker가 메세지를 받았다는 신호

## acks=0

> producer는 acks를 기다리지 않음
>
> > 데이터 손실 가능성이 있음

## acks=1

> producer는 leader broker로부터 ack를 기다림
>
> > leader broker가 데이터를 받았다는 것을 보장
> >
> > > 데이터 손실 가능성이 적음

## acks=all

> producer는 leader broker와 follower broker로부터 ack를 기다림
>
> > 모든 broker가 데이터를 받았다는 것을 보장
> >
> > > 데이터 손실이 없음
