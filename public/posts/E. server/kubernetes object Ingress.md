# kubernetes Ingress

> service들을 외부로 노출
>
> > 클라이언트가 하나의 ip를 통해서 접근할 수 있게 도와줌

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
    - host: order.fast-snackbar.com
      http:
        paths:
          - pathType: Prefix
            path: /
            backend:
              service:
                name: order
                port:
                  number: 80
    - host: payment.fast-snackbar.com
      http:
        paths:
          - pathType: Prefix
            path: /
            backend:
              service:
                name: payment
                port:
                  number: 80
    - host: delivery.fast-snackbar.com
      http:
        paths:
          - pathType: Prefix
            path: /
            backend:
              service:
                name: delivery
                port:
                  number: 80
```

## IngressController
