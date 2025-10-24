# Docker image nginx http3

## install

```sh
docker run --name nginx -d -p 80:80 -p 443:443 macbre/nginx-http3
```

## default.conf

```conf
server {
    # http/3
    listen 443 quic reuseport;

    # http/2 and http/1.1
    listen 443 ssl;
    http2 on;

    server_name localhost;  # customize to match your domain

    # you need to mount these files when running this container
    ssl_certificate     /etc/nginx/ssl/crt.pem;
    ssl_certificate_key /etc/nginx/ssl/private.pem;
    # (optional) enable OCSP stapling
    ssl_trusted_certificate /etc/nginx/ssl/ca-bundle.pem;

    # TLSv1.3 is required for QUIC.
    ssl_protocols TLSv1.2 TLSv1.3;

    # 0-RTT QUIC connection resumption
    ssl_early_data on;

    # Add Alt-Svc header to negotiate HTTP/3.
    add_header alt-svc 'h3=":443"; ma=86400';

    # Sent when QUIC was used
    add_header QUIC-Status $http3;

    location / {
        # your config
    }
}
```
