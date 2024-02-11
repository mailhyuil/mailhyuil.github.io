# kubectl

> kubectl은 ~/.kube/config를 읽어서 api server로 요청한다.
>
> > ~/.kube/config 로 yaml 파일을 설정
> >
> > > static pod path : 마스터 노드:/etc/kubernetes/manifests
> > >
> > > > kubelet path : 워커 노드:/var/lib/kubelet

## 명령어

```sh
kubectl config use-context minikube
kubectl config current-context
kubectl config get-contexts

# 노드 접속
ssh 워커노드IP 또는 마스터노드IP

# 실행
kubectl run web --image=nginx --port=80 --dry-run=client -o yaml > web.yaml # pod 생성
kubectl create deploy web --image nginx --port 80 --replicas 3 --dry-run=client -o yaml > web.yaml # deployment 생성
kubectl expose deploy web --type=LoadBalancer --port 80 --target-port 80 # service 생성

# yaml 파일을 읽어서 선언형으로 실행
kubectl apply -f <file_path>
# yaml 파일을 edit
kubectl edit deploy web

# get 확인
kubectl get node # pod / deploy / svc / node / namespace / rs / all
kubectl get pod -A # all namespace
kubectl get pod -o wide # node 정보까지 확인
kubectl get pod --show-labels # label 확인
kubectl get pod -o wide --sort-by=.metadata.creationTimestamp # 생성 시간 순으로 정렬
kubectl get pod <pod-name> -o jsonpath="{.metadata.ownerReferences[0].name}"

# delete 삭제
kubectl delete pod web

# describe 이벤트 확인
kubectl describe pod nginx

# log 확인
kubectl logs <pod-name>

# exec 명령어 실행
kubectl exec -it <pod-name> -- bash

# scale replica 개수 조절
kubectl scale rs my-replicaset-name --replicas=3

# rolling update image 변경
kubectl set image deployment web web=nginx:v2 --record
# kubectl set image 여러개
kubectl set image deployment web web-container=nginx:v2,db-container=postgres:v2 --record
# status 확인
kubectl rollout status deployment web
# history 확인
kubectl rollout history deployment web
# rollback
kubectl rollout undo deployment web --to-revision=1
```
