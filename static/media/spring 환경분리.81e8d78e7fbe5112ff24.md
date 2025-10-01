# 환경분리

## yml 파일 분리

1. application-local.yml

```yml
spring:
  config:
    activate:
      on-profile: local
```

2. application-prod.yml

```yml
spring:
  config:
    activate:
      on-profile: prod
```

3. yml 파일 하나로

- "---"로 나누기

```yml
server:
  port: 9000 # 기본 포트 설정
---
spring:
  profiles: development
server:
  port: 9001 # 프로필마다 포트번호 다르게 설정

---
spring:
  profiles: production
server:
  port: 0
```

## Run/Debug Configurations

- Active profiles: local

## 활성 프로필 설정

1. yml에 설정

```yml
spring:
  profiles:
    active: local # local profile로 실행된다
```

2. -D 옵션으로 설정

```bash
gradle bootRun -Dspring.profiles.active=local

gradle build -Dspring.profiles.active=local

java -jar -Dspring.profiles.active=local [jar_name].jar
```

3. 환경변수로 설정

```
-e SPRING-PROFILES-ACTIVE=prod
```

## Profile() 활용

```
@Configuration
@Profile("local")
public class LocalUploadPathConfig {
    @Bean
    public String uploadPath(){
        return "c:/Temp/upload";
    }
}
```

```
@Configuration
@Profile("prod")
public class ProdUploadPathConfig {
    @Bean
    public String uploadPath(){
        return "/tmp/upload";
    }
}
```
