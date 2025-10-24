# kube object Node affinity

> 특정한 노드를 선택해서 pod를 배치하는 방법

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  affinity:
    nodeAffinity: # 노드에 대한 조건을 지정
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions: # disktype이 ssd인 node에 파드 생성
              - key: disktype
                operator: In
                values:
                  - ssd
  containers:
    - name: nginx
      image: nginx
      imagePullPolicy: IfNotPresent
```
