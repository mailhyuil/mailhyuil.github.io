# kubernetes 명령어

```sh
# kubectl exec <pod> -- <CMD>
kubectl exec -it nginx -- bash

kubectl logs -f <pod>

kubectl cp <local_path> <pod_name>:<pod_path>
kubectl cp <pod_name>:<pod_path> <local_path>

kubectl edit

# kubectl expose <object> <object_name> --type=<type>
kubectl expose deployment my-deployment --name=my-loadBalancer --type=LoadBalancer

kubectl top
```
