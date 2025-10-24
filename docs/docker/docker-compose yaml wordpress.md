# docker-compose yaml wordpress

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
      - "8080:80"
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

## wp-config.php

> 추가

```php
define('FS_METHOD', 'direct');
define('WP_TEMP_DIR', '/apps/woori-policy/wordpress/wp-content/upgrade');
```
