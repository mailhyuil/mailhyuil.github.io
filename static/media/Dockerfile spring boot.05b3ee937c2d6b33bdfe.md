# Dockerfile spring-boot

> open-jdk로 빌드 jar파일 실행
>
> > 런타임용 컨테이너를 만들 때는 jre (o) jdk (x) (사이즈가 더 작음)

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
