# Sidecar Pattern

지원하는 기능(프로토콜..)이 많아질 수록 Client는 Thicker Client가 된다.

1. 코드 복잡도 증가
2. 코드 결합도가 증가
3. 하나의 언어로 모든 기능을 구현해야한다.

이런 문제를 해결하기 위해 Sidecar Proxy를 통한 Sidecar Pattern을 사용할 수 있다.

## example

1. Linkerd, Istio, Envoy...
2. Sidecar Proxy Container
3. Layer 7 Proxies
