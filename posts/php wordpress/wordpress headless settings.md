# wordpress headless settings

## install

```sh
npm i wpapi
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
    platform: linux/x86_64
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
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
volumes:
  db_data: {}
```

## plugins

```txt
Enable CORS
WordPress REST API Authentication
JWT Authentication for WP REST API
```
