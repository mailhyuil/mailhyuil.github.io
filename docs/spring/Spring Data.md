# Spring Data

1. pom.xml

```xml
<!-- https://mvnrepository.com/artifact/org.springframework.data/spring-data-commons -->
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-commons</artifactId>
    <version>2.3.9.RELEASE</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework.data/spring-data-jpa -->
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-jpa</artifactId>
    <version>2.3.9.RELEASE</version>
</dependency>
```

2. servlet-context.xml
   `<jpa:repositories base-package="com.sb.school.repository"></jpa:repositories>`

3. repository

```java
public interface UserRepository extends JpaRepository<User, String>{

	public User findOneByUsername(String username);

    public List<User> findByPassword(String password);

    public List<User> findByClassCode(Classes classCode);

    public User findOneByName(String name);
}
```

- hibernate-dialect (방언)
  - oracle : `org.hibernate.dialect.OracleDialect`
  - mysql : `org.hibernate.dialect.MySQLDialect`
  - mariaDB : `org.hibernate.dialect.MariaDBDialect`
  - progress : `org.hibernate.dialect.ProgressDialect`

### onDelete & cascade = CascadeType.REMOVE

> onDelete는 DB 레벨, CascadeType.REMOVE은 JPA 레벨
