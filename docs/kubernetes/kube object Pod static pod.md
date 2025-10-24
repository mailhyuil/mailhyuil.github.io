# kube object Pod static pod

> API가 아닌 kubelet이 실행하는 pod
>
> > kubelet은 /etc/kubernetes/manifests 디렉토리내에 있는 yaml 파일을 확인해서 pod를 실행한다.
> >
> > > var/lib/kubelet/config.yaml 에서 staticPodPath: /etc/kubernetes/manifests 로 설정되어있다.

## /etc/kubernetes/manifests/test-pod.yaml

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: test-pod
    namespace: default
spec:
    containers:
        - name: test-container
        image: busybox
        command: ["sleep", "3600"]
```
