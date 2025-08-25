# CRT & CSR (Certificate Signing Request)

> CSR : 인증서(crt 파일)를 만들기 위한 요청서
>
> (CSR을 생성해서 요청을 하면 관리자가 certificate를 해서 돌려줌)
>
> > key, csr, crt 파일 필요
> >
> > > crt 파일을 얻기 위한 과정

## 순서

```md
1. key 생성
2. csr 생성
3. csr을 인증기관(관리자)에게 보내기(요청)
4. 인증기관(관리자)가 csr을 approve
5. crt 파일을 받음
6. crt 파일을 변수에 사용
```
