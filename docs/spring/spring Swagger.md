# spring Swagger

- pom.xml

```xml
	<dependency>
		<groupId>io.springfox</groupId>
		<artifactId>springfox-swagger2</artifactId>
		<version>2.6.1</version>
	</dependency>
	<dependency>
		<groupId>io.springfox</groupId>
		<artifactId>springfox-swagger-ui</artifactId>
		<version>2.6.1</version>
	</dependency>
```

- annotation

```java
@EnableSwagger2
@ApiOperation(value="사용자 정보 조회", notes="사용자 정보를 조회")
@ApiModelProperty(value="아이디")
@ApiModel
```
