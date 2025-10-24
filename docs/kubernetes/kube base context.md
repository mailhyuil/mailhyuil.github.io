# kube base context

> 쿠버네티스 리소스 (클러스터) 를 식별하는 데 사용되는 설정 정보의 세트
>
> > ~/.kube/config라는 파일에 저장되며, 이 파일에는 여러 컨텍스트가 포함될 수 있습니다.

## context 전환

```sh
kubectl config use-context [context name]
kubectl config current-context
```
