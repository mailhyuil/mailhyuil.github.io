# kube Auth ServiceAccount for Pod

> Pod가 kubernetes API 서버에 접근할 때 인증 (Pod가 가지고 있는 인증)
>
> 모든 Pod는 Service Account라는 계정을 가지고 있음
>
> > Pod에서 돌아가는 프로세스가 접근할 리소스에 대한 권한 모니터링 대시보드, 로그 수집... (e.g. 프로메테우스)
> >
> > > 인증토큰은 Secret에 저장되어 있음 (kubectl get secret 명령어로 확인 가능)

## 생성

### cli로 생성

```sh
kubectl create serviceaccount <service-account-name> -n <namespace>

kubectl create token <service-account-name>
```
