# minikube local image 사용하기

1. Set the environment variables with eval $(minikube docker-env)

```sh
eval $(minikube docker-env)
```

2. Build the image with the Docker daemon of Minikube (e.g., docker build -t my-image .)

```sh
docker build . -t my-image
```

3. Set the image in the pod specification like the build tag (e.g., my-image)

4. Set the imagePullPolicy to Never, otherwise Kubernetes will try to download the image.

## server.yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    run: my-node
  name: my-node
spec:
  containers:
    - image: hyuil/my-node:latest
      imagePullPolicy: Never
      name: my-node
      ports:
        - containerPort: 8080
      resources: {}
      envFrom:
        - configMapRef:
            name: my-config
  dnsPolicy: ClusterFirst
  restartPolicy: Always
status: {}
```
