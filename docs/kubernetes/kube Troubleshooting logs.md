# kube TroubleShooting logs

## kubectl describe

## kubectl logs

> pod의 로그를 확인

```sh
kubectl logs <pod-name>

# 최근 실패한 인스턴스의 로그 알아내기
kubectl logs <pod-name> -p

# multi container pod 환경일 경우 컨테이너 이름 지정
kubectl logs <pod-name> -c <container-name>
```
