# proxy vs reverse proxy

> 서버가 하는 일을 대신 수행하는 서버

## proxy

> 클라이언트가 어느 서버로 갈지를 알고있는 상태 그리고 그 중간에 거쳐가는 서버를 프록시 서버라고 한다.
>
> > usecase: caching, load balancing, security, anonymity, logging, block sites...

## reverse proxy

> 클라이언트가 최종 목적지 서버를 모르는 상태에서 요청을 보내면, 리버스 프록시 서버가 요청을 받아서 적절한 서버로 요청을 전달해주는 서버
>
> > usecase: caching, load balancing, ingress, canary deployment, microservices...
