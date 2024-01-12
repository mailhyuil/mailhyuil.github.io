# kubernetes Ingress

> L7 스위치 역할을 논리적으로 수행
>
> > 클러스터로 접근하는 URL 별로 다른 서비스에 트래픽 분산
> >
> > 노출 된 여러개의 Service들을 하나의 엔드포인트로 외부에 노출
> >
> > (e.g. https://myapp.com/order, https://myapp.com/payment, https://order.myapp.com, https://payment.myapp.com)
> >
> > (e.g. example.com/order를 nestjs service로 라우팅 시켜놓았다면, nestjs service의 /user 핸들러 로 접근하려면 example.com/order/user로 접근하면 된다.)
> >
> > > rules에 정의된 host로 접근하면 해당 service로 라우팅
> > >
> > > > 지원하는 기능
> > > >
> > > > Service에 외부 URL을 제공
> > > >
> > > > 트래픽을 로드밸런싱
> > > >
> > > > SSL 인증서 처리
> > > >
> > > > Virtual hosting 지정

## IngressController 설치

> Ingress Controller를 deploy하기 위한 manifest 파일을 다운로드 및 적용
>
> > CloudProvider을 사용할 시 LoadBalancer를 IngressController로 사용할 수 있다.
> >
> > > IngressController는 HOST headers의 정보를 읽고 어떤 Service로 라우팅 할지 결정한다
> > >
> > > > 라우팅 규칙은 내가 생성한 Ingress를 참조한다.

```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml
```

## pod 또는 deployment 생성

> ingress controller의 namespace에

```sh
kubectl run nginx --image=nginx --port=80 --dry-run=client -o yaml > nginx.yaml
```

## service 생성

```sh
kubectl expose deployment nginx --port=80 --type=NodePort --dry-run=client -o yaml > nginx-svc.yaml
```

## ingress 생성

> tls를 적용하려면 Secret을 생성하고 Ingress에 tls를 적용해야 한다.

```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: ingress-nginx
  name: app-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  tls:
    - hosts:
        - example.com
      secretName: testsecret-tls
  rules:
    - host: example.com
    - http:
        paths:
          - path: /<path_1>
            pathType: Prefix
            backend:
              service:
                name: <service-name>
                port:
                  number: 80
          - path: /<path_2>
            pathType: Prefix
            backend:
              service:
                name: <service-name>
                port:
                  number: 3000
```
