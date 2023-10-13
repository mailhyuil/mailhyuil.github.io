# kubectl jsonpath

```sh
kubectl get pods -o jsonpath="{$}"

# service cluster ip 조회
kubectl get svc <service-name> -o jsonpath="{.spec.clusterIP}" -n <namespace>
```
