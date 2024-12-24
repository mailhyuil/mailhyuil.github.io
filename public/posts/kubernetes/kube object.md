# kubernetes object

> 쿠버네티스로 애플리케이션을 배포하고 운영하기 위한 리소스들
>
> > 쿠버네티스 시스템 내에서 영속성을 가지는 오브젝트
> >
> > > 클러스터의 의도한 상태를 나타내기 위해 오브젝트를 이용
> > >
> > > > status 필드는 쿠버네티스 시스템과 컴포넌트에 의한 오브젝트의 현재 상태를 나타냄
> > > >
> > > > > 쿠버네티스 control plane은 이 status를 사용자가 의도한 상태와 일치시키기 위해 끊임없이 / 능동적으로 관리

## Pod (Workload)

> 어떤 애플리케이션을

## ReplicaSet

> 얼마나

## Node / Namespace

> 어디에

## Deployment

> 어떤 방식으로 배포할 것인가

## Service / Endpoints

> 트래픽을 어떻게 로드밸런싱할 것인가

```
우리 클러스터에는 10개의 Node에 5개의 Namespace가 있고,
100개의 Deployment를 이용해 애플리케이션을 배포하고 있구나.
배포는 점진적 배포 전략을 이용하고 있네. (Deployment의 속성)
ReplicaSet을 보니 Pod를 2개씩 생성해서 애플리케이션을 실행하고 있구나.
Service를 보니 이 서비스를 호출하려면 my-app이라는 도메인 이름으로 호출할 수 있겠다.
```

## spec === status

> spec : 쿠버네티스가 달성해야 할 목표
>
> > status : 오브젝트의 현재 상태
> >
> > > spec과 status를 일치시키는 것이 목표다

## yaml

```yaml
apiVersion: v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  selector:
    matchLabels:
      app: nginx
  replicas: 2
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
        image: nginx:1.14.2
        ports:
            - containerPort: 80
```
