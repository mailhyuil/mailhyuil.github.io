# Docker image mysql

## run

```bash
docker run --name mysql-container --network private -e MYSQL_ROOT_PASSWORD=<password> -d -p 호스트포트:3306 mysql:latest
docker exec -it mysql-container mysql -u root -p
```

## 권한 설정

```sql
grant all privileges on *.* to 'root'@'%';
```
