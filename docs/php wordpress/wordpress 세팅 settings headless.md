# wordpress headless settings

> [reference doc](https://developer.wordpress.org/rest-api/reference/)
>
>> http://localhost:8080/?rest_route=/wp/v2/posts 로 접근 가능

## install

```sh
npm i wpapi
npm i @types/wpapi

npm i wp-types

npm i @wordpress/block-library
```

## wp-api.service.ts

```ts
import { InjectionToken } from "@angular/core";
import WpApi from "wpapi";

export const WpApiService = new InjectionToken<WpApi>("Wpapi");

export const WpApiProvider = {
  provide: WpApiService,
  useFactory: () => {
    const wp = new WpApi({
      endpoint: "https://cms.dep.team/?rest_route=/",
    });
    return wp;
  },
};
```

## docker-compose.yml

```yaml
services:
  db:
    # platform: linux/x86_64
    platform: linux/amd64
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: wordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - '8080:80'
    restart: always
    volumes:
      - ./wordpress:/var/www/html # 로컬 디렉토리를 컨테이너 내부로 마운트
      - ./uploads.ini:/usr/local/etc/php/conf.d/uploads.ini
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
volumes:
  db_data: {}
```

## uploads.ini

```ini
file_uploads = On
memory_limit = 500M
upload_max_filesize = 500M
post_max_size = 500M
max_execution_time = 600
```

## plugins

```txt
Enable CORS

Advanced Custom Fields

Amazon S3, DigitalOcean 스페이스 및 Google 클라우드 스토리지용 WP 오프로드 미디어 라이트

GA Google Analytics – Connect Google Analytics to WordPress

WordPress REST API Authentication
JWT Authentication for WP REST API
```
