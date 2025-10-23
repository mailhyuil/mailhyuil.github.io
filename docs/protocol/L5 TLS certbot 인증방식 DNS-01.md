# L5 TLS certbot 인증방식 DNS-01

> 웹서버 없이 NameServer에 TXT 레코드를 추가하는 방식
>
> > "--manual --preferred-challenges dns" 옵션을 사용합니다.
> >
> > > renew를 통한 자동갱신이 불가능합니다.
> > >
> > > 대신 플러그인을 사용해서 Nameserver에 대신 등록해주는 방법을 사용 가능 (python3-certbot-dns-cloudflare)

```sh
docker run --rm -it certbot/certbot certonly --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory -d dep.team -d *.dep.team

# DNS TXT Record 등록
# _acme-challenge.dep.team. 300 IN TXT "..."
```
