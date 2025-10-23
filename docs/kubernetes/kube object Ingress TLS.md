# kube object Ingress TLS

## Secret

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: testsecret-tls
  namespace: default
data:
  tls.crt: base64 encoded cert
  tls.key: base64 encoded key
type: kubernetes.io/tls
```

## Ingress

```yaml
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
