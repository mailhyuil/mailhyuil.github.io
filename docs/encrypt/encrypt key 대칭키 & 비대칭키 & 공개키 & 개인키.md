# encrypt key 대칭키 & 비대칭키 & 공개키 & 개인키

## 대칭키

> 하나의 키로 암호화, 복호화
>
> 하나의 키만 생성하니까 쉽게 생성할 수 있음 (sign이 불필요)
>
> > 하나의 키를 시크릿키(Secret Key), 대칭키(Symmetric Key), 세션키(Session Key : 세션 동안 데이터를 안전하게 암호화하고 복호화하는 데 사용), 쉐어드키(Shared Key), 단용키 라고 부른다.
> >
> > > openssl, gpg, uuid,.. 으로 생성
> > >
> > > > 대칭키는 비대칭키보다 빠르다 그래서 (TLS에 사용됨)

```sh
client(대칭키) --encrypted-data--> server(대칭키)
client(대칭키) <--encrypted-data-- server(대칭키)

## 생성 방법 ##
# openssl
openssl rand -base64 32

# gpg
gpg --gen-key --symmetric

# uuid package
uuid()
```

## 비대칭키

> 개인키와 공개키를 사용
>
> > 둘 중 하나의 키로 암호화, 다른 키로 복호화
> >
> > > 주로 인증, 세션인증, 세션키교환, 연결, 전자서명 에 사용
> > >
> > > > 인증에 중점을 둘 때는 개인키로 (공개키를 가지고 있는 사용자는 인증된 사용자니까)
> > > >
> > > > > RSA, 1디피-헬만(Diffie-Hellman), 타원곡선암호(Elliptic Curve Cryptosystem, ECC), 전자서명(digital signature)
> > > > >
> > > > > > ssh-keygen, openssl, gpg.. 으로 생성

```sh
client(공개키) --encrypted-data--> server(개인키)
client(개인키) --encrypted-data--> server(공개키)

client(공개키) <--encrypted-data-- server(개인키)
client(개인키) <--encrypted-data-- server(공개키)

## 생성 방법 ##
# openssl
openssl genpkey -algorithm RSA -out private_key.pem
openssl rsa -pubout -in private_key.pem -out public_key.pem

# gpg
gpg --full-generate-key

# ssh-keygen
ssh-keygen -t rsa -b 2048
```

## 혼합 방식

> 비대칭키로 대칭키를 암호화해서 보내기
>
> > 앞으로 복호화 해서 얻은 대칭키로 서로 암호화해서 데이터를 보냄
> >
> > > ssh는 비대칭키로 인증 및 연결을 하고 연결 세션동안 데이터를 대칭키(세션키)로 암호화
