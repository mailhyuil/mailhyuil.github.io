# kubernetes Ingress

> L7 스위치 역할을 논리적으로 수행
>
> > 클러스터로 접근하는 URL 별로 다른 서비스에 트래픽 분산
> > 노출 된 여러개의 Service들을 하나의 엔드포인트로 외부에 노출
> > ex) https://myapp.com/order, https://myapp.com/payment, https://order.myapp.com, https://payment.myapp.com
> >
> > > rules에 정의된 host로 접근하면 해당 service로 라우팅
> > >
> > > > 지원하는 기능
> > > > Service에 외부 URL을 제공
> > > > 트래픽을 로드밸런싱
> > > > SSL 인증서 처리
> > > > Virtual hosting 지정

## 명령

```sh
kubectl run nginx --image=nginx --port=80 --labels=app=nginx -n ingress-nginx --dry-run=client -o yaml > nginx.yaml


```

## manifest.yml

```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  namespace: ingress-nginx
  name: app-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
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

## IngressController

> Ingress를 만든 후
>
> > Cloud Provider가 Load Balancer를 Ingress Controller로 만들어준다
> >
> > > Ingress Controller는 HOST headers의 정보를 읽고 어떤 Service로 라우팅 할지 결정한다
> > >
> > > > 라우팅 규칙은 내가 생성한 Ingress를 참조한다.
