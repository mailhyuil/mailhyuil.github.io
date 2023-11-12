# Dockerfile-spring-boot

- spring-boot 프로젝트는 톰캣이 내장되어있기때문에 tomcat을 따로 설치할 필요가 없다
- open-jdk만 설치해서 빌드한 jar파일을 실행시켜주면된다

```Dockerfile
FROM openjdk:18-jdk-alpine AS builder
COPY gradlew .
COPY gradle gradle
COPY build.gradle .
COPY settings.gradle .
COPY src src
RUN chmod +x ./gradlew
RUN ./gradlew bootJAR

FROM openjdk:18-jdk-alpine
COPY --from=builder build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

- docker build -t 이미지이름 .
- 런타임용 컨테이너를 만들 때는 jdk가아니라 jre를 사용하자 사이즈가 더 작다
