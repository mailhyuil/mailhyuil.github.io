# kube manifest nginx

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: client
spec:
  replicas: 3
  selector:
    matchLabels:
      app: client
  template:
    metadata:
      name: client
      labels:
        app: client
    spec:
      containers:
        - name: client
          image: nginx
          resources:
            limits:
              memory: "128Mi"
              cpu: "500m"
          ports:
            - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: client
spec:
  type: NodePort
  selector:
    app: client
  ports:
    - port: 8080
      targetPort: 80
```
