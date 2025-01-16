# docker-compose gnuboard6

> root에 data 디렉토리를 생성 후 진행

```yaml
services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_DATABASE: gnuboard
      MYSQL_USER: username
      MYSQL_ROOT_PASSWORD: password
      MYSQL_PASSWORD: password
    ports:
      - "10016:3306"

  gnuboard6:
    depends_on:
      - db
    image: navystack/gnuboard-g6:nightly-latest
    restart: always
    logging:
      options:
        max-size: "10m"
    ports:
      - "10015:8000"
    volumes:
      - gnuboard6-data:/g6
    environment:
      - DB_HOST=db
      - DB_PORT=3306
      - DB_NAME=gnuboard
      - DB_DRIVER=mysql
      - DB_USER=username
      - DB_PASSWORD=password

volumes:
  db_data:
  gnuboard6-data:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: ./data/
```
