# SpringBoot (스프링부트)

> viewResolver는 자동으로 `templates 폴더` 안을 찾는다

> resource는 `static 폴더` 안을 찾는다 (e.g. css/style.css)

> .properties를 `.yml`로 바꾸면 자동으로 설정이 변경된다.

> spring-boot-starter-data-jpa 는 기본으로 hibernate를 사용한다.

## annotation scan

```java
@ComponentScan(basePackages = {"com.sb.firstboot.controller",
								"com.sb.firstboot.service.impl",
								"com.sb.firstboot.repository",
								"com.sb.firstboot.config"})
@EntityScan("com.sb.firstboot.domain")
@MapperScan(value = {"com.sb.firstboot.repository"})
```

## application.properties or application.yml

### Database(Oracle)

```
spring.datasource.driver-class-name:oracle.jdbc.driver.OracleDriver
spring.datasource.url:jdbc:oracle:thin:@localhost:1521:xe
spring.datasource.username:user
spring.datasource.password:1234

/* .yml */
spring:
  datasource:
    driver-class-name: oracle.jdbc.driver.OracleDriver
    url: jdbc:oracle:thin:@localhost:1521:xe
    username: user
    password: 1234
```

### Database(MySQL)

```
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/blog?serverTimezone=Asia/Seoul
spring.datasource.username=user
spring.datasource.password=1234

/* .yml */
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/mytododb?serverTimezone=Asia/Seoul
    username: root
    password: 1234
```

### Mybatis

```
mybatis.type-aliases-package:com.example.demo.model
mybatis.mapper-locations:mybatis/mapper/*.xml

/* .yml */
mybatis:
  type-aliases-package: com.sb.firstBoot.domain
  mapper-locations: classpath:resources/mapper/*.xml
```

### JPA(hibernate)

```
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

spring.jpa.properties.hibernate.show_sql=true

spring.jpa.properties.hibernate.format_sql=true

spring.jpa.properties.hibernate.use_sql_comments=true

spring.jpa.open-in-view=true

spring.jpa.hibernate.ddl-auto=create

/* .yml */
spring:
  jpa:
    open-in-view: true
    properties:
      hibernate:
        dialect: org.hibernate.dialect.MySQL8Dialect
        show_sql: true
        format_sql: true
        use_sql_comments: true
        hbm2ddl:
          auto: create

```

### Slf4j

```
logging:
  file:
    name: ${user.dir}/log/test.log  # 로깅 파일 위치이다.
    max-history: 7 # 로그 파일 삭제 주기이다. 7일 이후 로그는 삭제한다.
    max-size: 10MB  # 로그 파일 하나당 최대 파일 사이즈이다.
  level:  # 각 package 별로 로깅 레벨을 지정할 수 있다.
    com.project.study : error
    com.project.study.controller : debug
```

## Working-Directory path 가져오기 (작업 디렉토리)

`System.getProperty("user.dir")`
