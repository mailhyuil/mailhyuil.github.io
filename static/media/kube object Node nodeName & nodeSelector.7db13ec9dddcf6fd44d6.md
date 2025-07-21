# kube object Pod nodeName & nodeSelector

## nodeName 사용

> 특정 이름의 노드에 pod를 배치하는 방법

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node-name
spec:
  replicas: 3
  selector:
    matchLabels:
      app: hello
  template:
    metadata:
      name: hello
      labels:
        app: hello
    spec:
      containers:
        - name: nginx
          image: nginxdemos/hello:plain-text
          ports:
            - name: http
              containerPort: 80
              protocol: TCP
      nodeName: minikube # nodeName 사용
```

## nodeSelector 사용

> 매치되는 라벨을 가진 노드에 pod를 배치하는 방법

### node에 label 추가

```sh
# 추가
kubectl label node {노드명} {key}={value}
# 삭제
kubectl label node {노드명} {key}-
```

### nodeSelector 사용

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: node-selector
spec:
  replicas: 3
  selector:
    matchLabels:
      app: hello
  template:
    metadata:
      name: hello
      labels:
        app: hello
    spec:
      containers:
        - name: nginx
          image: nginxdemos/hello:plain-text
          ports:
            - name: http
              containerPort: 80
              protocol: TCP
      nodeSelector:
        team: red
```
