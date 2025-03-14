# kafka base Consumer & Consumer Group

> Consumer Group 내에는 하나 혹은 여러개의 Consumer가 있을 수 있고
>
> 각 Consumer는 하나 혹은 여러개의 partition을 담당할 수 있다.
>
> > 각 서비스 당 하나의 consumer group

## \_\_consumer_offsets

> \_\_consumer_offsets은 topic에 consumer group의 offset 정보가 저장된다.
>
> > 각 consumer group이 어디까지 읽었는지를 기억하기 위함
