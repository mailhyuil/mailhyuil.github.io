# kubernetes Label & Selector

## label

> pod들을 구분짓기 위한 논리적인 이름

```yaml
metadata:
  labels:
    app: backend
    version: v1
    env: prod
```

```sh
kubectl get pod my-pod --show-labels
kubectl label pod my-pod app=backend
kubectl label pod my-pod version=v1
kubectl label pod my-pod version=v2 --overwrite

kubectl get pod/my-pod --label-columns[L] app.env
```

## selector

> label을 이용해서 특정 pod들을 선택
>
> > kubectl get [object type] --selector <label query, ...>
> >
> > > "label query" => key=value, key!=value, key in, key notin, key, !key

### set-based selector

```
key in 'env in (dev, stage, prod)'
key notin
key
!key
```
