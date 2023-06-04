# kubernetes deployment

## manifest.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
  labels:
    app: my-app
spec:
  replicas: 3 # replicaSet
  selector:
    matchLabels:
      app: my-app
  strategy:
    type: Recreate
  template: # pod
    metadata:
      labels:
        app: my-app
        project: fastcampus
        env: production
        version: v1
    spec:
      containers:
        - name: my-app
          image: yoonjeong/my-app:1.0
          ports:
            - containerPort: 8080
          resources:
            limits:
              memory: "64Mi"
              cpu: "50m"
```
