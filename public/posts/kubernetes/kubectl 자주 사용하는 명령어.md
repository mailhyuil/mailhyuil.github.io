# kubectl

## ~/.kube (local)

> kubectl은 `~/.kube/config`를 읽어서 API Server로 요청한다.

```txt
cache      config     http-cache
```

## /etc/kubernetes (master node)

> static pod path = 마스터 노드:/etc/kubernetes/manifests (파일만 생성하면 kubelet이 자동으로 실행)
>
> > kubelet path = 워커 노드:/var/lib/kubelet

```txt
addons      controller-manager.conf  manifests
admin.conf  kubelet.conf             scheduler.conf
```

## config

```sh
# 클러스터 목록 확인
kubectl config get-contexts

# 현재 클러스터 확인
kubectl config current-context

# 클러스터 변경
kubectl config use-context <cluster_name>
```

## 노드 접속 (ssh)

```sh
ssh 워커노드_IP
# docker-daemon, kubelet, kube-proxy, CNI 확인

ssh 마스터노드_IP
# controller-manager, scheduler-manager, etcd, api-server, matrics-server, core-dns, docker-daemon, kubelet 확인
```

## pod 생성 (run)

```sh
# 즉시 pod 생성
kubectl run web --image=nginx --port=80 --env TEST=hello

# yaml로 pod 생성
kubectl run web --image=nginx --port=80 --env TEST=hello --dry-run=client -o yaml > web.yaml
```

## deployment 생성 (create)

```sh
# 즉시 deployment 생성
kubectl create deploy web --image nginx --port 80 --replicas 3

# yaml로 deployment 생성
kubectl create deploy web --image nginx --port 80 --replicas 3 --dry-run=client -o yaml > web.yaml
```

## configmap 생성 (create)

```sh
# 즉시 configmap 생성
kubectl create configmap my-config --from-literal BASE_URL=http://localhost:8080

# yaml로 configmap 생성
kubectl create configmap my-config --from-literal BASE_URL=http://localhost:8080 --dry-run=client -o yaml > my-config.yaml
```

## secret 생성 (create)

```sh
# 즉시 secret 생성
kubectl create secret generic my-secret --from-literal PASSWORD=1234

# yaml로 secret 생성
kubectl create secret generic my-secret --from-literal PASSWORD=1234 --dry-run=client -o yaml > my-secret.yaml
```

## service 생성 (expose)

```sh
kubectl expose deploy web --name web-lb --type=LoadBalancer --port 80 --target-port 80
```

## 오브젝트 삭제 (delete)

```sh
kubectl delete pod web
```

## 이벤트 확인 (describe)

```sh
kubectl describe pod nginx
```

## yaml 파일을 읽어서 실행 (apply)

```sh
kubectl apply -f <file_path>
```

## yaml 파일을 동적으로 수정 (edit)

```sh
kubectl edit deploy web
```

## 생성된 오브젝트 보기 (get)

```sh
kubectl get node # pod / deploy / svc / node / namespace / rs / all
```

## 생성된 오브젝트 namespace로 보기

```sh
# 모든 namespace 확인
kubectl get pod -A

# 특정 namespace 확인
kubectl get pods --namespace=kube-system
```

## 생성된 오브젝트 labels로 보기

```sh
# label 보기
kubectl get pod --show-labels

# 특정 label key를 가진 pod 조회
kubectl get pod -L version

# 특정 label의 key=value가 일치하는 pod 조회
kubectl get pod -l version=v1

# 특정 label column으로 조회
kubectl get pod web --label-columns app.env
```

## 생성된 오브젝트 selector로 보기

> label보다 더 정밀하게 쿼리로 조회 가능

```sh
# label 보기
kubectl get deploy web --show-labels

# 특정 label의 key=value가 일치하는 deploy 조회
kubectl get deploy web --selector app=web

# 여러 label의 key=value가 일치하는 deploy 조회
kubectl get deploy web --selector app=web,env=dev
```

## 생성된 오브젝트 모든 정보 보기 (-o wide)

```sh
# node 정보까지 확인
kubectl get pod -o wide
```

## jsonpath로 조회 (-o jsonpath="")

```sh
kubectl get pod <pod-name> -o jsonpath="{.metadata.ownerReferences[0].name}"
```

## 정렬해서 보기 (--sort-by=)

```sh
# 생성 시간 순으로 정렬
kubectl get pod -o wide --sort-by=.metadata.creationTimestamp
```

## label 추가, 변경, 삭제

```sh
# label 추가
kubectl label pod web app=web

# label 변경
kubectl label pod web env=dev --overwrite

# label 삭제
kubectl label pod web app- env-
```

## 로그 보기 (logs)

```sh
kubectl logs <pod-name>

# multi container pod 환경일 경우 컨테이너 이름 지정
kubectl logs <pod-name> -c <container-name>

kubectl logs deployment/<deployment_name>

kubectl logs service/<service_name>

```

## 최근 실패한 인스턴스의 로그 보기 (logs -p)

```sh
kubectl logs <pod-name> -p
```

## 명령어 실행 (exec)

```sh
kubectl exec -it <pod-name> -- bash
```

## 파일 복사 (cp)

```sh
# pod -> local
kubectl cp <local_path> <pod_name>:<pod_path>

# local -> pod
kubectl cp <pod_name>:<pod_path> <local_path>
```

## cpu, memory 사용량 확인 (top)

> metrics-server 필요

```sh
kubectl top pods --sort-by=cpu # --sort-by=memory
kubectl top pods my-pod

kubectl top nodes --sort-by=cpu # --sort-by=memory
kubectl top nodes my-node
```

## replica 개수 조절 (scale)

```sh
kubectl scale deploy web --replicas=3
```

## rolling update 실행 (set image)

```sh
# image 변경
kubectl set image deploy web web=nginx:v2 --record

# image 여러개 변경
kubectl set image deploy web web-container=nginx:v2,db-container=postgres:v2 --record
```

## rolling update 상태 확인 (rollout status)

```sh
kubectl rollout status deploy web
```

## rolling update 이력 확인 (rollout history)

```sh
kubectl rollout history deploy web
```

## rolling update 롤백 (rollout undo)

```sh
kubectl rollout undo deploy web --to-revision=1
```

## 자주 사용하는 vim 단축키

```sh
# 한줄 삭제
dd

# 커서부터 끝까지 삭제
D

# 한줄 복사
yy

# 2줄 복사
2yy

# mac os에서 붙여넣기
ctrl + v

# window os에서 붙여넣기
shift + insert
```

# 자주 사용하는 linux cmd

```sh
# output grep
| grep -i -v <제외할 단어> <찾을 단어>

# output을 잘라서 보기
cut -d ' ' -f 1
```
