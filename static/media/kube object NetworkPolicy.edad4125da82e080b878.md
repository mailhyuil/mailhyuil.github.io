# kube object NetworkPolicy

> 방화벽 역할
>
> > ingress=inbound / egress=outbound
> >
> > > ipBlock / namespaceSelector / podSelector / protocol / port
> > > ip, namespace, pod, port, protocol 단위로 트래픽 허용할 수 있다

## yaml

```yml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: order
  namespace: snackbar
  labels:
    service: order
    project: snackbar
spec:
    podSelector:
        matchLabels:
        service: order
        project: snackbar
    policyTypes:
        - Ingress
        # - Egress
    ingress:
        - from:
            - ipBlock:
                cidr:
                except:
            - namespaceSelector:
                matchLabels:
                service: menu
                project: snackbar
            - podSelector:
                matchLabels:
                service: menu
                project: snackbar
        ports:
            - protocol: TCP
            port: 8080
```
