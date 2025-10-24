# kube base v1.33 - Octarine

> 2025년 4월 23일 업데이트된 쿠버네티스 버전

1. 네이티브 Sidecar Containers (Stable)

사이드카 컨테이너를 공식 지원하며, 주 컨테이너보다 먼저 시작되고, 주 컨테이너 이후에 종료됨. 프로브와 메모리 우선순위(OOM score) 지원도 강화됨

2. In-Place Pod Vertical Scaling (Beta)

이미 실행 중인 Pod의 CPU/메모리 요청 및 제한 값을 재시작 없이 실시간으로 조정 가능

3. User Namespaces Enabled by Default (Beta)

컨테이너 내부 UID/GID를 호스트에서 비특권 계정으로 매핑하여 권한 격리 강화. 보안을 크게 높이는 조치임

4. .kuberc 파일 (kubectl 개인 설정, Alpha)

사용자별 kubectl 설정을 kubeconfig와 분리된 .kuberc에 저장 가능. 별도 개인 설정(alias, 기본 플래그 등) 관리

5. Job Success Policy (Stable)

모든 파드가 성공하지 않아도, 지정한 조건을 만족하면 Job을 성공으로 간주하는 유연한 정책

6. Dynamic Resource Allocation (DRA) 개선 (Beta)

GPU 등의 특수 하드웨어 자원을 더욱 유연하게 할당할 수 있도록 개선된 DRA 기능. 하드웨어 자원 활용 최적화

7. Backoff Limits Per Index for Indexed Jobs (GA)

Indexed Job에서 인덱스별로 리트라이 제한(backoffLimitPerIndex)을 설정할 수 있어, 일부 실패에도 전체 Job 영향을 줄일 수 있음

8. Immutable Service CIDRs & Smart Routing (GA)

서비스 IP 풀 부족 시 새로운 CIDR 추가 가능. trafficDistribution: PreferClose 옵션으로 지연 시간 적은 지역으로 트래픽 라우팅

9. nftables 모드 for Kube-Proxy (GA)

iptables 대신 nftables 백엔드 사용 지원하여 대규모 환경에서 성능 및 규칙 처리 효율성 향상

10. Container Lifecycle: Zero Sleep & Custom Stop Signal (Beta)

preStop/postStart 훅에서 Sleep duration을 0으로 설정 가능하게 되었고, 컨테이너 종료 시 커스텀 stop signal도 지정 가능
