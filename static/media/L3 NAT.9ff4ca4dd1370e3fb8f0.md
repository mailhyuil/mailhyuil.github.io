# NAT (Network Address Translation)

> Network Address Translation
>
> > 사설 IP를 공인 IP로 변환하는 기술
> >
> > > IP 고갈 문제 해결, 보안 향상
> > >
> > > > NAT table에 IP 주소 매핑 정보 저장

```sh
# NAT Table
Internal IP | Internal Port | External IP | External Port | Destination IP | Destination Port
10.0.0.2    | 8992          | x.x.x.x     | 80            | 120.0.0.2      | 80
```
