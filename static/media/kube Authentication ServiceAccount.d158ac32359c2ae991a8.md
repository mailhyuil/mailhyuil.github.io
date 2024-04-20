# Service Account 인증 (Authentication)

> Pod가 kubernetes API 서버에 접근할 때 인증 (Pod가 가지고 있는 인증)
>
> > pod에서 돌아가는 프로세스가 접근할 리소스에 대한 권한 모니터링 대시보드, 로그 수집... (e.g. 프로메테우스)
>
> > > 인증토큰은 Secret에 저장되어 있음 (kubectl get secret 명령어로 확인 가능)

## 생성

```sh
kubectl create serviceaccount <service-account-name> -n <namespace>
```

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  creationTimestamp: 2019-06-16T00:12:34Z
  name: build-robot
  namespace: default
  resourceVersion: "272500"
  uid: 721ab723-13bc-11e5-aec2-42010af0021e
```
