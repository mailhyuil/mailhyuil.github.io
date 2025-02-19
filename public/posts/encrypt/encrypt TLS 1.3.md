# TLS 1.3

```txt
기본 흐름은 RSA 방식과 유사하나, 예비 마스터 암호를 직접 교환하지 않고, Diffie-Hellman 키 교환을 통해 각자 계산하여 생성
순방향 비밀성(Forward Secrecy, FS) 보장 → 세션 키가 유출되더라도 이전 통신 내용 보호됨
```
