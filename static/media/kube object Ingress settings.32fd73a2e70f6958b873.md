# kubernetes Ingress settings

## create namespace

```sh
k create namespace ingress-nginx
```

## configmap 생성

```sh
k create configmap ingress-nginx-controller -n ingress-nginx
```

## service account 생성

```sh
k create serviceaccount ingress-nginx -n ingress-nginx
k create serviceaccount ingress-nginx-admission -n ingress-nginx
```

## role / rolebinding / clusterrole / clusterrolebinding 생성

```sh

```
