# kube object NetworkPolicy

> 방화벽 역할
>
> > ingress=inbound / egress=outbound
> >
> > > ipBlock / namespaceSelector / podSelector / protocol / port
> > >
> > > ip, namespace, pod, port, protocol 단위로 트래픽 허용할 수 있다

## yaml

```yml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: test-network-policy
  namespace: default
spec:
  podSelector: # 이 파드에 대한 네트워크 정책
    matchLabels:
      role: db
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - ipBlock: # 매치되는 ip만 들어오게 허용
            cidr: 172.17.0.0/16
            except:
              - 172.17.1.0/24
        - namespaceSelector: # 매치되는 namespace만 들어오게 허용
            matchLabels:
              project: myproject
        - podSelector: # 매치되는 pod만 들어오게 허용
            matchLabels:
              role: frontend
      ports: # 매치되는 port만 들어오게 허용
        - protocol: TCP
          port: 6379
  egress:
    - to:
        - ipBlock: # 매치되는 ip만 나가게 허용
            cidr: 10.0.0.0/24
      ports: # 매치되는 port만 나가게 허용
        - protocol: TCP
          port: 5978
```
