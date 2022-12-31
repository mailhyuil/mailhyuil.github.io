# Jasypt(Java Simplified Encryption)를 사용한 프로퍼티 암호화

1. denpendencies

```xml
<!-- https://mvnrepository.com/artifact/org.jasypt/jasypt -->
<dependency>
	<groupId>org.jasypt</groupId>
	<artifactId>jasypt</artifactId>
	<version>1.9.3</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.jasypt/jasypt-spring31 -->
<dependency>
	<groupId>org.jasypt</groupId>
	<artifactId>jasypt-spring31</artifactId>
	<version>1.9.3</version>
</dependency>
```

1. 암호화 (Jasypt util)

```java
public static void main(String[] args) {
	StandardPBEStringEncryptor jasypt = new StandardPBEStringEncryptor();

	jasypt.setAlgorithm("PBEWithMD5AndDES");
	jasypt.setPassword("password");

	String encryptedUsername = jasypt.encrypt("root");
	String encryptedPwd = jasypt.encrypt("1234");

	System.out.println(encryptedUsername);
	System.out.println(encryptedPwd);

	String decryptedUsername = jasypt.decrypt(encryptedUsername);
	String decryptedPwd = jasypt.decrypt(encryptedPwd);

	System.out.println(decryptedUsername);
	System.out.println(decryptedPwd);
}
```

2. properties 파일에 암호화된 값 저장

```
mysql.username=ENC(IS/UoVWaEE0tyiG8ZaLN2w==)
mysql.password=ENC(gJa/MRSqwHysvGCGye56N9UHX08Eo1L3)
```

- properties-context.xml (property 사용을 위한 설정)

```xml
<!-- properties 파일의 내용을 Controller, Service 에서 사용하기 위한 설정 -->
<context:property-placeholder location="/WEB-INF/spring/props/db.properties"/>

<util:properties  id="mysql" location="/WEB-INF/spring/props/db.properties" />
```

3. jasypt-context (복호화 하기 위한 설정)

```
<bean id="encryptorConfig" class="org.jasypt.encryption.pbe.config.EnvironmentStringPBEConfig">
	<property name="algorithm" value="PBEWithMD5AndDES" />
	<property name="passwordEnvName" value="서버 환경변수에 넣은 키값" />
</bean>

<bean id="encryptor"
	class="org.jasypt.encryption.pbe.StandardPBEStringEncryptor">
	<property name="config" ref="encryptorConfig" />
</bean>

<bean class="org.jasypt.spring31.properties.EncryptablePreferencesPlaceholderConfigurer">
	<constructor-arg ref="encryptor" />
	<property name="fileEncoding" value="UTF-8" />
	<property name="locations">
		<list>
			<value>/WEB-INF/spring/props/db.properties</value> <!-- 복호화할 properties 위치-->
		</list>
	</property>
</bean>
```

### jasypt bean은 가장 먼저 생성되어야 한다. (web.xml)

```
<context-param>
	<param-name>contextConfigLocation</param-name>
	<param-value>
		/WEB-INF/spring/jasypt-context.xml,
		/WEB-INF/spring/properties-context.xml,
		/WEB-INF/spring/data-context.xml,
		/WEB-INF/spring/hibernate-context.xml,
		/WEB-INF/spring/mybatis-context.xml,
		/WEB-INF/spring/root-context.xml,
		/WEB-INF/spring/security-context.xml
	</param-value>
</context-param>
```

# spring-boot-starter

## gradle.build

```
implementation 'com.github.ulisesbocchio:jasypt-spring-boot-starter:3.0.4'
```

## application.yml

```
jasypt:
  encryptor:
    bean: jasyptEncryptor
```

## config

```
@Configuration
public class JasyptConfig {
    @Value("${jasypt.encryptor.password}")
    private String password;

    @Bean("jasyptEncryptor")
    public StringEncryptor stringEncryptor(){
        PooledPBEStringEncryptor encryptor = new PooledPBEStringEncryptor();
        SimpleStringPBEConfig config = new SimpleStringPBEConfig();
        config.setPassword(password);
        config.setPoolSize("1");
        config.setAlgorithm("PBEWithMD5AndDES");
        config.setStringOutputType("base64");
        config.setKeyObtentionIterations("1000");
        config.setSaltGeneratorClassName("org.jasypt.salt.RandomSaltGenerator");
        encryptor.setConfig(config);

        return encryptor;
    }
}
```

## test

```
public class JasyptConfigTest extends JasyptConfig {
    @Test
    public void jasypt_encrypt_decrypt_test() {
        String plainText = "tkdanwlrn!1";

        StandardPBEStringEncryptor jasypt = new StandardPBEStringEncryptor();
        jasypt.setPassword("password");

        String encryptedText = jasypt.encrypt(plainText);
        String decryptedText = jasypt.decrypt(encryptedText);

        System.out.println(encryptedText);

        assertThat(plainText).isEqualTo(decryptedText);
    }
}
```
