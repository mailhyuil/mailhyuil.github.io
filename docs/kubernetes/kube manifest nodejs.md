# kube nginx nodejs

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: server
spec:
  replicas: 3
  selector:
    matchLabels:
      app: server
  template:
    metadata:
      name: server
      labels:
        app: server
    spec:
      containers:
        - name: server
          image: node
          resources:
            limits:
              memory: "128Mi"
              cpu: "500m"
          ports:
            - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: server
spec:
  type: ClusterIP
  selector:
    app: server
  ports:
    - port: 3000
      targetPort: 3000
  clusterIP: 10.96.1.10
```
