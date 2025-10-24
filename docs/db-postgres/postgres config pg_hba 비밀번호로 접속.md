# postgres config pg_hba 비밀번호로 접속

## pg_hba.conf

> METHOD 부분으로 암호화 알고리즘으로 변경, trust로 변경하면 비밀번호 없이 접속 가능
>
> > 변경 후 postgresql restart /// docker라면 docker restart
> >
> > > 알고리즘 종류 : md5, scram-sha-256, password, gss, sspi, krb5, ident, peer, ldap, radius, cert, pam, reject

```sh
# TYPE  DATABASE        USER            ADDRESS                 METHOD
local   all             all                                     scram-sha-256
```
