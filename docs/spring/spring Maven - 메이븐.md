# spring Maven - 메이븐

```
mvn update

mvn clean

mvn install

mvn -B dependency:go-offline

mvn package
```

- 패키지 war파일 이름

```xml
<build>
    <finalName>ROOT</finalName>
    <plugins>
```

- test skip

```xml
<properties>
   <maven.test.skip>true</maven.test.skip>
</properties>
```
