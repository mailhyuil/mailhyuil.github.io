# kubectl

> kubectl은 ~/.kube/config를 읽어서 api server로 요청한다.
>
> > ~/.kube/config 로 yaml 파일을 설정
> >
> > > static pod path : 마스터 노드:/etc/kubernetes/manifests // 파일만 생성하면 자동으로 실행
> > >
> > > > kubelet path : 워커 노드:/var/lib/kubelet

## 자주 사용하는 명령어

```sh
kubectl config get-contexts # 클러스터 목록 확인
kubectl config current-context # 현재 클러스터 확인
kubectl config use-context minikube # 클러스터 변경

# 노드 접속
ssh 워커노드IP 또는 마스터노드IP

# 오브젝트 실행
# pod
kubectl run web --image=nginx --port=80 --env TEST=hello --dry-run=client -o yaml > web.yaml
# deploy, configmap, secret
kubectl create deploy web --image nginx --port 80 --replicas 3 --dry-run=client -o yaml > web.yaml
kubectl create configmap my-config --from-literal BASE_URL=http://localhost:8080 --dry-run=client -o yaml > my-config.yaml
kubectl create secret generic my-secret --from-literal PASSWORD=1234 --dry-run=client -o yaml > my-secret.yaml
# service
kubectl expose deploy web --name web-lb --type=LoadBalancer --port 80 --target-port 80

# delete 삭제
kubectl delete pod web

# describe 이벤트 확인
kubectl describe pod nginx

# yaml 파일을 읽어서 선언형으로 실행
kubectl apply -f <file_path>

# yaml 파일을 edit
kubectl edit deploy web

# get 확인
kubectl get node # pod / deploy / svc / node / namespace / rs / all

# get namespace 확인
kubectl get pod -A # all namespace
kubectl get pods --namespace=kube-system # namespace 확인

# get labels 확인
kubectl get pod --show-labels # label 확인
kubectl get pod -l version=v1 # value=value로 조회
kubectl get pod -L version # key로 조회
kubectl get pod web --label-columns app.env # label column으로 조회

# get selector 확인 # label보다 더 정밀하게 쿼리로 조회 가능
kubectl get deploy web --show-labels # label 확인
kubectl get deploy web --selector app=web # label로 조회
kubectl get deploy web --selector app=web,env=dev # label로 조회

# get wide 확인
kubectl get pod -o wide # node 정보까지 확인
kubectl get pod -o wide --sort-by=.metadata.creationTimestamp # 생성 시간 순으로 정렬
kubectl get pod <pod-name> -o jsonpath="{.metadata.ownerReferences[0].name}"

# label 추가 / 삭제
kubectl label pod web app=web
kubectl label pod web env=dev --overwrite
kubectl label pod web app- env- # label 삭제

# log 확인
kubectl logs <pod-name>
# -p 최근 실패한 인스턴스의 로그 알아내기
kubectl logs <pod-name> -p

# exec 명령어 실행
kubectl exec -it <pod-name> -- bash

# 파일 복사
kubectl cp <local_path> <pod_name>:<pod_path>
kubectl cp <pod_name>:<pod_path> <local_path>

# cpu, memory 사용량 확인 (metrics-server 필요)
kubectl top pods --sort-by=cpu # --sort-by=memory
kubectl top pods my-pod

kubectl top nodes --sort-by=cpu # --sort-by=memory
kubectl top nodes my-node

# scale replica 개수 조절
kubectl scale deploy web --replicas=3

# rolling update
# image 변경
kubectl set image deploy web web=nginx:v2 --record
# image 여러개 변경
kubectl set image deploy web web-container=nginx:v2,db-container=postgres:v2 --record
# status
kubectl rollout status deploy web
# history
kubectl rollout history deploy web
# undo
kubectl rollout undo deploy web --to-revision=1
```

## vim

```sh
dd # 한줄 삭제
D # 커서부터 끝까지 삭제
yy # 한줄 복사
2yy # 2줄 복사

grep -i -v <제외할 단어> <찾을 단어>
cut -d ' ' -f 1

ctrl + v # mac 붙여넣기
shift + insert # window 붙여넣기
```
