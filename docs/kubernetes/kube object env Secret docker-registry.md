# kube object env Secret docker-registry

> docker-registry의 인증정보를 저장하는 kube object

```sh
kubectl create secret generic regcred --from-file=.dockerconfigjson=/root/.docker/config.json --type=kubernetes.io/dockerconfigjson
kubectl create secret docker-registry my-registry-secret --docker-username=<username> --docker-password=<password> --docker-email=<email> --docker-server=<server>
```
