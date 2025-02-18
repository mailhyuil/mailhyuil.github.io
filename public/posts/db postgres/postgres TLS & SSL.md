# postgres TLS & SSL

## postgresql.conf

```conf
ssl = on
ssl_cert_file = 'server.crt' # cert.pem
ssl_key_file = 'server.key' # private.pem
```

## openssl

```sh
openssl req -x509 -newkey rsa:4096 -nodes -keyout private.pem -out cert.pem
chmod 600 private.pem
chown postgres:postgres private.pem
```
