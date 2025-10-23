# Helm 명령어

## repository 관련 명령어

```sh
# helm repo add [repo name] [repo url]
helm repo add bitnami https://charts.bitnami.com/bitnami
# chart 리스트 출력
helm repo list
# charts 업데이트
helm repo update

# chart 검색
helm search repo bitnami
helm search repo bitnami/nginx

# 템플릿 미리보기
helm template [project_name] bitnami/nginx

# chart pull
helm pull bitnami/nginx --untar

# chart 삭제
helm delete bitnami/nginx

# chart 생성
helm create my-chart

# chart 정보 확인
helm get values # helm get values <release name> --revision <revision number>
helm get hooks
helm get manifest
helm get notes
helm get history

# chart 상태 확인
helm status [release name]

# chart 패키지 생성
helm package [chart name]

# helm plugin 설치
helm plugin
```

## helm install

> 패키지의 yaml 파일들이 실행되어 동작됨

```sh
# show 명령어로 chart의 정보 확인 환경변수 설정 시 참고
helm show chart bitnami/nginx
# chart 설치
helm install [project_name] bitnami/nginx
helm install [project_name] --set <key>=<value>,<key>=<value> bitnami/nginx

# 설치된 chart의 정보 확인
helm list

# chart 제거
helm uninstall [project_name]
```
