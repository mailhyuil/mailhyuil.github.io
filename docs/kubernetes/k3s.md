# k3s

CNCF(Cloud Native Computing Foundation) 인증을 받은 정식 쿠버네티스 배포판  
운영에 꼭 필요하지 않은 '부수적인 코드'들을 걷어내어 가볍게 만든 것

```txt
k3s server - k3s agent 1 (k8s node와 같은 개념)
           - k3s agent 2
           - k3s agent 3
```

## 제거된 기능 (The "Removed" Bloat)

In-tree 클라우드 프로바이더: AWS, Azure, GCP 등 특정 클라우드 환경에 종속된 레거시 코드들을 삭제했습니다. 대신 표준 인터페이스인 **CCM(Cloud Controller Manager)**을 사용하도록 유도합니다.

In-tree 스토리지 드라이버: 특정 벤더의 스토리지 연동 코드들을 삭제했습니다. 대신 CSI(Container Storage Interface) 표준을 통해 필요한 드라이버만 설치해서 쓰도록 되어 있습니다.

Docker 지원 코드: 최신 k8s 흐름에 맞춰 Docker 엔진 의존성을 버리고, 더 가벼운 containerd를 기본 런타임으로 내장했습니다.

## 교체된 구성 요소 (The "Replaced" Engine)

데이터베이스 (etcd → SQLite): 표준 k8s는 고가용성을 위해 etcd를 필수적으로 쓰지만, k3s는 단일 노드 운영 시 훨씬 가벼운 SQLite를 기본으로 씁니다. (물론 설정에 따라 etcd나 외부 DB도 사용 가능합니다.)

네트워크 플러그인 (CNI): 여러 복잡한 옵션 대신, 가볍고 설정이 쉬운 Flannel을 기본 CNI로 탑재했습니다.

## install

```sh
brew install k3d


```
