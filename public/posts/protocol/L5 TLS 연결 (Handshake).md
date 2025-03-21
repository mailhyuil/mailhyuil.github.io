# TLS 연결 (Handshake)

> TCP 핸드쉐이크가 끝난 후 시작된다.

## Session Key

```txt
ClientRandom + ServerRandom + Pre-Master Secret = Session Key
```

## RSA Key Exchange 방식 (TLS 1.0 ~ 1.2)

```md
1. Client Hello
   - Client Hello 메시지 전송
   - TLS 버전, Cipher Suite, Random 값 전송
2. Server Hello
   - Server Hello 메시지 전송
   - 선택한 TLS 버전, 선택한 Cipher Suite, Random 값, Public Key + Certificate 전송
3. Server Hello Done
   - Server Hello Done 메시지 전송
   - 추가 설정이 없을 경우
4. Client Key Exchange
   - 서버가 보낸 인증서를 인증서 발행 기관을 통해 검증
   - Pre-Master Secret 생성 (새로운 Random 값)
   - Pre-Master Secret 을 Public Key로 암호화해서 서버에 전송
5. Change Cipher Spec, Finished

- Client 준비 완료 메시지 전송

5. Change Cipher Spec, Finished
   - 서버는 받은 Pre-Master Secret을 Private Key로 복호화
   - 클라이언트, 서버가 ClientRandom + ServerRandom + Pre-Master Secret으로 세션키 생성
   - Server 준비 완료 메시지 전송
6. 세션키로 암호화 통신
```

## 디피-헬만(Diffie-Hellman) 키 교환 방식 (TLS 1.2 ~ 1.3)

> Pre-Master Secret을 교환하는 방식이 다르다.
>
> > 세션키가 유출되어도 과거의 통신 내용을 복호화 불가능
> >
> > > private key를 유출해도 세션키를 복호화 불가능

```md
1. Client Hello
   - Client Hello 메시지 전송
   - TLS 버전, Cipher Suite, Random 값 전송
2. Server Hello
   - Server Hello 메시지 전송
   - 임시 Diffie-Hellman Public Key 생성
   - 선택한 TLS 버전, 선택한 Cipher Suite, Random 값, Diffie-Hellman Public Key + Certificate 전송
3. Server Hello Done
   - Server Hello Done 메시지 전송
   - 추가 설정이 없을 경우
4. Client Key Exchange
   - 서버가 보낸 인증서를 인증서 발행 기관을 통해 검증
   - 임시 Diffie-Hellman Public Key 생성
   - Diffie-Hellman Public Key + Random 값을 서버로 전송
5. Change Cipher Spec, Finished

   - Client, Server는 서로의 공개키로 Pre-Master Secret을 생성
   - Client Random + Server Random + Pre-Master Secret으로 세션키 생성
   - Client 준비 완료 메시지 전송

6. Change Cipher Spec, Finished
   - 받은 Pre-Master Secret을 Private Key로 복호화
   - Server 준비 완료 메시지 전송
7. 세션키로 암호화 통신
```
