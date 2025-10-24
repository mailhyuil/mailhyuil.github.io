# docker-compose network public & private

```yaml
version: "3.8"
services:
  db:
    container_name: postgres
    image: postgres:14-alpine
    ports:
      - "5432:5432"
    restart: always
    volumes:
      - postgres-data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 1234
      POSTGRES_DB: mydb
    logging:
      driver: "json-file"
      options:
        max-size: "8m"
        max-file: "10"
    networks:
      - private
  server:
    container_name: server
    image: hyuil/server:0.0.1
    ports:
      - "3000:3000"
    restart: always
    networks:
      - private
  nginx:
    container_name: nginx
    image: hyuil/nginx:0.0.1
    ports:
      - "80:80"
      - "443:443"
    restart: always
    networks:
      - public
      - private
volumes:
  postgres-data: {}
networks:
  public:
    driver: bridge
  private:
    driver: bridge
```
