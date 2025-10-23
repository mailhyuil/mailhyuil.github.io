# kube Storage PersistentVolumes (PV)

> Cloud 환경에서는 PersistentVolume을 요청하지 않고 다이나믹 프로비저닝을 사용한다.
>
> Cloud 환경에서 예비의 Storage를 가지고만 있으면 비용이 계속 발생하기 때문에 다이나믹 프로비저닝으로 요청시 PersistentVolume을 생성하는 것
>
> > 이때 StorageClass를 사용해서 어떤 타입의 Storage를 사용할지 정의한다.
> >
> > > provisioner, parameters, reclaimPolicy, volumeBindingMode 등을 정의한다.

## storage-class.yaml

> kubectl apply -f storage-class.yaml.yaml

```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: standard
provisioner: kubernetes.io/aws-ebs # 어느 클라우드에서 사용할지 정의 (프로비저너)
parameters: # 프로비저너에게 전달할 파라미터
  type: gp2
reclaimPolicy: Retain # 삭제시 어떻게 할지 정의 (default: Delete)
allowVolumeExpansion: true
mountOptions:
  - debug
volumeBindingMode: Immediate
```
