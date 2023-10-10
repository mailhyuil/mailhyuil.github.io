# kubernetes Label & Selector

## selector & labels

> pod들을 구분짓기 위한 논리적인 이름
>
> > selector와 label을 이용해서 특정 pod들을 선택

```yml
selector:
  matchLabels:
    app: my-app
template:
  metadata:
    labels:
      app: my-app
      version: v1
      env: prod
```

## selector query

```sh
kubectl get <object type> --selector <label_query_1, label_query_2>

# "label query" => key=value, key!=value, key in, key notin, key, !key
# key in 'env in (dev, stage, prod)'

kubectl get pod my-pod --show-labels
kubectl get pod/my-pod --label-columns app.env

kubectl label pod my-pod app=backend
kubectl label pod my-pod version=v1
kubectl label pod my-pod version=v2 --overwrite
```