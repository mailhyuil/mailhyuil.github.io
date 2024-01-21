# docker-compose public & private

```yaml
version: "3.8"
services:
  db:
    container_name: postgres
    image: <image>
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
      - default
      - public
      - private # private 네트워크 연결
  server:
    container_name: server
    image: <image>
    ports:
      - "3000:3000"
    restart: always
    networks:
      - default
      - public
      - private # private 네트워크 연결
  nginx:
    container_name: nginx
    image: <image>
    ports:
      - "80:80"
      - "443:443"
    restart: always
    extra_hosts:
      - "host.docker.internal:host-gateway"
    networks:
      - default
      - public
      - private # private 네트워크 연결

volumes:
  postgres-data:

networks:
  public:
    driver: bridge
  private:
    driver: bridge
    internal: true # private 네트워크 내부 통신만 가능하도록 설정
```
