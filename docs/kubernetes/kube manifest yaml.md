# kube manifest yaml

## 기본 구조

```yml
apiVersion:
kind:
metadata:
  name:
  namespace:
  labels:
spec:
  selector:
    matchLabels:
  template:
    metadata:
    spec:
      env:
        - name:
          valueFrom:
            configMapKeyRef:
              name:
              key:
```
