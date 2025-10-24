# base L4 vs L7  Load Balancer

## L4 Load Balancer

> IP, PORT만 다루는 로드밸런서
>
> > TCP 연결을 그대로 전달하는 방식이다.
> >
> > > protocol에 대해 잘 모르는 경우 유용 e.g. postgres protocol, mysql protocol...

```sh
# Pros
Simple
Efficient
Secure
Works with any protocols
one TCP connection
# Cons
load balancing 방식이 단순하다.
연결을 유지해야한다.
no caching
protocol에 대한 이해가 없다. (위험할 수 있다.)
```

## L7 Load Balancer

```sh
# Pros
smart load balancer
caching
great for MSA
API Gateway logic
Authentication
# Cons
Expensive
Decrypt
Two TCP connections
Must share TLS certificate
Needs to buffer
Needs to understand the protocol
```
