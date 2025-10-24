# kube object ReplicaSet

## manifest.yaml

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: myapp-replicaset
  labels:
    app: my-app
spec:
  selector:
    matchLabels:
      app: my-app
  replicas: 1
  template: # pod
    metadata:
      labels:
        app: my-app
    spec:
      containers:
        - name: my-app
          image: hyuil/my-app:1.0
          ports:
            - containerPort: 8080
          resources:
            limits:
              memory: "64Mi"
              cpu: "50m"
```
