# Helm

## install

```sh
# mac
brew install helm

# window
choco install kubernetes-helm
```

## repo 추가

```sh
# helm repo add [repo name] [repo url]

helm repo add bitnami https://charts.bitnami.com/bitnami

# 리스트 출력
helm repo list

# 업데이트
helm repo update

# 검색
helm search repo bitnami
helm search repo bitnami/nginx

# 템플릿 미리보기
helm template [project_name] bitnami/nginx

# 설치
helm install [project_name] bitnami/nginx
```
