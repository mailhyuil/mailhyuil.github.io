# Service Account 인증

> Service Account : Pod 내부에서 사용하는 인증 / Pod가 쿠버네티스 API 서버에 접근할 때 사용
> pod에서 돌아가는 프로세스가 접근할 리소스에 대한 권한 (모니터링 대시보드, 로그 수집... ex) 프로메테우스
> 인증토큰은 Secret에 저장되어 있음

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
