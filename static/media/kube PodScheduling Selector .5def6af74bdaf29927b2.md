# kubernetes Selector

> metadata.label은 오브젝트의 label을 지정
>
> template.metadata.label은 오브젝트의 pod의 label을 지정
>
> > 다른 오브젝트는 selector를 이용해서 다른 오브젝트를 참조할 수 있다.

## selector

```sh
# "label query" => key=value, key!=value, key in, key notin, key, !key
# key in 'env in (dev, stage, prod)'
kubectl get <object type> --selector <label_query_1, label_query_2>
```

```yaml
selector:
  matchLabels:
    release: "stable"
  matchExpressions:
    - { key: environment, operator: In, values: [dev] }
```

## matchLabels, matchExpressions

> Deployment, Job, ReplicaSet, DaemonSet 은 matchLabels와 matchExpressions를 가지고 있다.
>
> > 좀 더 복잡한 selector를 만들 수 있다.
> >
> > > service에서는 matchLabels필드와 matchExpressions필드가 존재하지 않는다.
> > >
> > > service는 명확하게 pod을 참조할 필요가 있어서 이다.
> > >
> > > 그냥 matchLabels 처럼 동작 함
