# kube Auth RBAC 인증

> 역할 기반 인증
>
> > .kube/config 파일에 사용자 정보가 저장되어 있음
> >
> > > Role, RoleBinding, ServiceAccount, ClusterRole, ClusterRoleBinding

```txt
# API Server의 3가지 인증 방법

1. Authentication : 사용자가 누구인지 확인
2. Authorization : 권한이 있는지 확인
3. Admission Control : 시스템에서 허용하는 요청인지 확인 (권한이 있더라도 시스템이서 제한을 두었을 수 있음)
```
