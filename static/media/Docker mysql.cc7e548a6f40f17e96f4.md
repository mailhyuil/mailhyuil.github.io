# docker-mysql

```bash
docker pull mysql

docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=<password> -d -p 호스트포트:3306 mysql:latest

docker exec -it mysql-container mysql -u root -p
```

```sql
grant all privileges on *.* to 'root'@'%';
```
