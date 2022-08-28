# Jasypt(Java Simplified Encryption)를 사용한 프로퍼티 암호화

1. denpendencies

```
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

2. jasypt-context

```
<bean id="envConfig" class="org.jasypt.encryption.pbe.config.EnvironmentStringPBEConfig">
	<property name="algorithm"  value="PBEWithMD5AndDES"/>
	<property name="passwordEnvName"  value="NAVER"/>
</bean>
	
<bean id="configEnc" class="org.jasypt.encryption.pbe.StandardPBEStringEncryptor">
	<property name="config"  ref="envConfig"/>
</bean>
	
<bean class="org.jasypt.spring31.properties.EncryptablePreferencesPlaceholderConfigurer">
	<constructor-arg ref="configEnc"/>
	<property name="fileEncoding" value="UTF-8"/>
	<property name="locations">
		<list>
			<value>/WEB-INF/spring/props/db.connection.properties</value>
			<value>/WEB-INF/spring/props/naver.email.properties</value>
		</list>
	</property>
</bean>
```

3. props 디렉토리를 만들어서 properties 파일에 프로퍼티 저장

```
mysql.username=ENC(IS/UoVWaEE0tyiG8ZaLN2w==)
mysql.password=ENC(gJa/MRSqwHysvGCGye56N9UHX08Eo1L3)
```

4. 암호화

```
StandardPBEStringEncryptor pbEnc = new StandardPBEStringEncryptor();

pbEnc.encrypt(value)
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