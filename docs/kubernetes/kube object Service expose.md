## expose

> 외부 IP를 할당 받으려면 expose 명령어를 사용해야 한다.
>
> > Kubernetes에서 사용되는 애플리케이션을 외부로 노출하는 명령어

```sh
kubectl expose deployment <deployment-name> --name=my-lb --type=LoadBalancer --port=80 --target-port=8080
```

## 환경변수

> 서비스를 생성하면 자동으로 "대문자 스네이크 케이스"의 환경변수가 생성된다.

```sh
# (e.g. test)
# 확인 명령어 : kubectl exec <pod-name> -- env | grep TEST
TEST_PORT
TEST_PORT_80_TCP
TEST_PORT_80_TCP_PROTO
TEST_PORT_80_TCP_PORT
TEST_PORT_80_TCP_ADDR
TEST_SERVICE_HOST
TEST_SERVICE_PORT
```
