# kube Troubleshooting MasterNode - ControlPlane

> controller-manager, scheduler-manager, etcd, api-server, matrics-server, core-dns, docker-daemon, kubelet 확인

## kubectl get pods -n kube-system

> control plane의 pod들이 모두 running 상태인지 확인
>
> > 문제가 있다면 control plane에 ssh 접속 후
> >
> > /etc/kubernetes/manifests/ 아래 yaml 파일들을 확인
