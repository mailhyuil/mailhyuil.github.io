# kubernetes Ingress

> 노출 된 여러개의 Service들을 하나의 엔드포인트로 외부에 노출
>
> > rules에 정의된 host로 접근하면 해당 service로 라우팅

## manifest.yml

```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: snackbar
  namespace: snackbar
  labels:
    project: snackbar
spec:
  defaultBackend:
    service:
      name: home
      port:
        number: 80
  rules:
    - host: order.fast-snackbar.com # 이 주소로 요청 하면
      http:
        paths:
          - pathType: Prefix
            path: /
            backend:
              service:
                name: order # order Service로 라우팅
                port:
                  number: 80
    - host: payment.fast-snackbar.com # 이 주소로 요청 하면
      http:
        paths:
          - pathType: Prefix
            path: /
            backend:
              service:
                name: payment # payment Service로 라우팅
                port:
                  number: 80
    - host: delivery.fast-snackbar.com # 이 주소로 요청 하면
      http:
        paths:
          - pathType: Prefix
            path: /
            backend:
              service:
                name: delivery # delivery Service로 라우팅
                port:
                  number: 80
```

## IngressController

> Ingress를 만든 후
>
> > Cloud Provider가 Load Balancer를 Ingress Controller로 만들어준다
> >
> > > Ingress Controller는 HOST headers의 정보를 읽고 어떤 Service로 라우팅 할지 결정한다
> > >
> > > > 라우팅 규칙은 내가 생성한 Ingress를 참조한다.
