# aws message queue SQS - simple queue service

> aws 메시지 큐 서비스
>
> > Delay는 최대 15분까지 가능

## Standard

> 기본 큐
>
> > 높은 처리량, 순서 보장 안함, 중복 허용
> >
> > > 높은 처리량이 필요한 경우에 적합

## FIFO (First In First Out)

> 먼저 들어온 메시지를 먼저 처리하는 큐
>
> > 순서 보장, 중복 허용 안함
> >
> > > 메시지 순서가 중요한 경우에 적합

## Dead Letter Queue (DLQ)

> 처리하지 못한 메시지를 별도의 큐에 보관하는 기능
>
> > 메시지 손실 방지 및 재처리 용이
