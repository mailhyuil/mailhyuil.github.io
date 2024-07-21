# kubernetes resource

## requests

> 리소스 요청
>
> > 최소 자원
> >
> > > 만약 여유자원이 없다면 Pending 상태로 실행되며 클러스터안에 여유가 생길때 까지 대기한다.

## limits

> 리소스 제한
>
> > limits는 파드 및 컨테이너에 사용할 수 있는 최대한의 리소스 양을 제한한다.
> >
> > > 최대 자원

## cpu

> "소수점" 0.1은 CPU코어 하나의 연산능력을 100이라고 하였을 때 10%만큼 할당하겠다는 뜻이다.
>
> > 혹은 "m"을 붙여서 밀리코어로 설정하거나 둘 중하나의 표현방식
> >
> > > 0.1 === 100m

## memory

> 메가바이트(10진법)
>
> > 혹은 메비바이트(2진법)로 표현

### 십진법 접두어

```txt
E(Exa)
P(Peta)
T(Tera)
G(Giga)
M(Mega)
K(Kilo)
```

### 이진법 접두어

```txt
Ei(Exbi)
Pi(Pebi)
Ti(Tebi)
Gi(Gibi)
Mi(Mebi)
Ki(Kibi)
```
