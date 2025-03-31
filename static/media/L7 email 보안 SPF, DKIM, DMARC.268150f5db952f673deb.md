# email SPF, DKIM, DMARC

## SPF (Sender Policy Framework)

> 메일 발신자 인증
>
> > MX 레코드가 지정된 서버에서만 메일을 보낼 수 있도록 설정.

```txt
example.com. 300 IN TXT "v=spf1 mx -all"
```

## DKIM (DomainKeys Identified Mail)

> 메일 서명
>
> > DKIM 키를 생성하고, DNS에 추가 (TXT 레코드)

```txt
default._domainkey.example.com. 300 IN TXT "v=DKIM1; k=rsa; p=MIIBIjANBg..."
```

## DMARC (Domain-based Message Authentication, Reporting & Conformance)

> 스팸 방지 정책

```txt
_dmarc.example.com. 300 IN TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```
