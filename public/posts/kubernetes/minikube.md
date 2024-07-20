# kubernetes minikube

## 명령어

```sh
# start
minikube start

# expose
minikube service <service-name> --url

# dashboard
minikube dashboard

# master node에 접속
# master node 내 docker container에 api server, etcd, controller, scheduler가 실행되어 있다.
minikube ssh
```
