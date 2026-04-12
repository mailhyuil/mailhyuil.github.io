# terraform

- IaC (Infra to Code) 플랫폼
- .tf 포멧 사용
- HCL 언어 사용
- 기본적으로 main.tf, provider.tf, data.tf, output.tf, variables.tf, backend.tf 파일 생성하자
- 모듈도 마찬가지

## cmd

```sh
terraform init # 작업 디렉터리를 초기화하고 테라폼 구동에 필요한 구성 요소들을 준비
terraform plan # 현재 인프라 상태와 코드를 비교하여 변경 사항을 예측해서 보여줍니다.
terraform apply # plan에서 확인된, 정의된 코드를 실제 클라우드 환경에 반영
terraform destroy # 생성된 모든 리소스를 깨끗하게 지웁니다.
```
