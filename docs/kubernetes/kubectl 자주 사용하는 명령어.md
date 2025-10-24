# kubectl 자주 사용하는 명령어

## ~/.kube (local)

> kubectl은 `~/.kube/config`를 읽어서 API Server로 요청한다.
>
> > RBAC 관련

```txt
cache      config     http-cache
```

## /etc/kubernetes (master node)

> static pod path = /etc/kubernetes/manifests (파일만 생성하면 kubelet이 자동으로 실행)
>
> > etcd 관련

```txt
addons      controller-manager.conf  manifests
admin.conf  kubelet.conf             scheduler.conf
```

## /var/lib/kubelet (worker node)

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

## node 제어

```sh
# node에 pod 스케줄링 중지
kubectl cordon <node-name>
# node에 스케줄링된 pod를 다른 node로 이동 후 cordon
kubectl drain <node-name> --ignore-daemonsets --force

# node에 pod 스케줄링 재개
kubectl uncordon <node-name>
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

## label 추가, 변경, 삭제

```sh
# label 추가가
kubectl label pod web version=v1

# label 변경
kubectl label pod web version=v2 --overwrite

# label 삭제 (끝에 - 붙이면 삭제)
kubectl label pod web version-
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

## rolling update

```sh
# rolling update (또는 그냥 edit으로 변경해도 된다)
kubectl set image deployment <deploy_name> <container_name>=nginx:1.17 --record

# rolling update (multi container)
kubectl set image deployment <deploy_name> <container_name>=nginx:1.17,<container_name>=postgres:9.6 --record

# 현재 상태를 annotate (CHANGE-CAUSE) // 또는 --record 옵션 사용하면 자동으로 변경 사유 기록
kubectl annotate deployment <deploy_name> kubernetes.io/change-cause="Rolling update to version 1.17"

# 상태 확인
kubectl rollout status deployment <deploy_name>

# 특정 revision 조회
kubectl rollout history deployment <deploy_name>
kubectl rollout history deployment <deploy_name> --revision=1

# rollback
kubectl rollout undo deployment <deploy_name> # 이전 버전으로 롤백
kubectl rollout undo deployment <deploy_name> --to-revision=1 # 특정 버전으로 롤백
```

## busybox로 명령어 실행

```sh
kubectl run test --image busybox -it --rm -- sh
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

# 붙여넣기
p

# 줄 삽입
o

# 뒤로가기
u

# 앞으로가기
ctrl + r

# 명령모드로 전환 후 insert 모드로 바로 전환
ctrl + o -> 명령

# mac os에서 붙여넣기
ctrl + v

# window os에서 붙여넣기
shift + insert
```

## 자주 사용하는 linux cmd

```sh
# output을 잘라서 보기
cut -d ' ' -f 1

# output grep
| grep -i -v <제외할 단어> <찾을 단어>

# output grep 검색 조건
| grep -e <찾을 단어> -e <찾을 단어>

# output을 file로
| grep 'file not found' > /path/to/file

# text를 file로
echo 'pv001' > /path/to/file

# 파일 생성
cat > deployment.yaml
...
ctrl + d

# os 확인
cat /etc/os-release
```
