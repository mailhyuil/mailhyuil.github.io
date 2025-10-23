# linux cmd exec vs eval

## exec

> 그냥 커멘드를 입력하는 것과 같다.

```sh
exec <cmd>
# is the same as
<cmd>
```

## eval

```sh
eval $something

eval $(some cmd)
# eval $(minikube docker-env)
```
