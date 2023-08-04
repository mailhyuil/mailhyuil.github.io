# kube nginx nestjs

```yaml
---
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  type: NodePort
  selector:
    app: nginx
  ports:
    - port: 8080
      targetPort: 80

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      name: nginx
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: hyuil/my-nginx:7.0
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
  name: nestjs
spec:
  type: ClusterIP
  selector:
    app: nestjs
  ports:
    - port: 4200
      targetPort: 3000
  clusterIP: 10.96.1.10
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nestjs
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nestjs
  template:
    metadata:
      name: nestjs
      labels:
        app: nestjs
    spec:
      containers:
        - name: nestjs
          image: hyuil/my-nest:1.0
          resources:
            limits:
              memory: "128Mi"
              cpu: "500m"
          ports:
            - containerPort: 3000
---
```
