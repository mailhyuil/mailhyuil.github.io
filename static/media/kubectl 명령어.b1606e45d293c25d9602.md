# kubernetes 명령어

```sh
# kubectl exec <pod> -- <CMD>
kubectl exec -it nginx -- bash

# 파일 복사
kubectl cp <local_path> <pod_name>:<pod_path>
kubectl cp <pod_name>:<pod_path> <local_path>

# yaml 파일 수정
kubectl edit

# kubectl expose <object> <object_name> --type=<type>
kubectl expose deployment my-deployment --name=my-loadBalancer --type=LoadBalancer

# pod 로그 확인
kubectl logs -f <pod>

# cpu, memory 사용량 확인 (metrics-server 필요)
kubectl top
```
