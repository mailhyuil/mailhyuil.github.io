# keycloak
> SSO 구현을 위한 API
## docker-keycloak

1. pull & run
```shell
docker run --name keycloak -d -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin jboss/keycloak:latest
```

2. addUser
```shell
docker exec keycloak /opt/jboss/keycloak/bin/add-user-keycloak.sh -u <USERNAME> -p <PASSWORD>
```

3. restart
```shell
docker restart keycloak
```