# spring Mybatis

## pom.xml

- mybatis
- mybatis-spring
- apache-commons(commons-dbcp2)
- spring-jdbc
- oracle-jdbc(ojdbc8)

```xml
<!-- https://mvnrepository.com/artifact/org.springframework/spring-jdbc -->
<dependency>
	<groupId>org.springframework</groupId>
	<artifactId>spring-jdbc</artifactId>
	<version>${org.springframework-version}</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.mybatis/mybatis -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.9</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.mybatis/mybatis-spring -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>2.0.7</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.apache.commons/commons-dbcp2 -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-dbcp2</artifactId>
    <version>2.9.0</version>
</dependency>

<!-- https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8 -->
<dependency>
    <groupId>com.oracle.database.jdbc</groupId>
    <artifactId>ojdbc8</artifactId>
    <version>21.5.0.0</version>
</dependency>

<!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.29</version>
</dependency>
```

## web.xml

```xml
<param-name>contextConfigLocation</param-name>
<param-value>../*-context.xml</param-value>
```

## mybatis-context.xml

- beans, context, mybatis-spring, tx

- DataSource

```xml
<bean id="mysqlDS" class="org.apache.commons.dbcp2.BasicDataSource"> <!-- mySQL -->
	<property name="driverClassName" value="com.mysql.cj.jdbc.Driver"/>
	<property name="url" value="jdbc:mysql://localhost:3306/mydb" />
	<property name="username" value="user1"/>
	<property name="password" value="!Korea8080"/>
</bean>

<bean id="oracleDS" class="org.apache.commons.dbcp2.BasicDataSource"> <!-- Oracle -->
	<property name="driverClassName"
			  value="oracle.jdbc.driver.OracleDriver" />
	<property name="url"
			  value="jdbc:oracle:thin:@localhost:1521:xe" />
	<property name="username" value="USER1" />
	<property name="password" value="12341234" />
</bean>
```

- SQLSessionFactory

```xml
<bean id="sqlSession" class="org.mybatis.spring.SqlSessionFactoryBean">
	<property name="dataSource" ref="oracleDS"></property>
	<property name="typeAliasesPackage"
			  value="com.sb.school.model"></property> <!-- Model 위치 -->
	<property name="mapperLocations" value="/WEB-INF/spring/mapper/*-mapper.xml"/> <!-- Mapper 사용 -->
	<property name="configuration">
		<bean class="org.apache.ibatis.session.Configuration">
			<property name="jdbcTypeForNull" value="VARCHAR"/>
			<property name="cacheEnabled" value="true"/>
			<property name="defaultExecutorType" value="REUSE"/>
			<property name="mapUnderscoreToCamelCase" value="false"/>
		</bean>
	</property>
</bean>
```

- SQLSessionTemplate

```xml
<bean class="org.mybatis.spring.SqlSessionTemplate">
	<constructor-arg ref="sqlSession" />
</bean>
```

- package scan

```xml
<mybatis-spring:scan base-package="com.sb.school.dao" /> <!-- Dao 위치 -->
```

## interface DAO 에서 작성시

- SQL DAO에서 작성

```java
@Select("SELECT * FROM tbl_student")
public List<StudentVO> selectAll();
```

> return값 `VO` or `int`

## mapper/\*-mapper.xml 에서 작성시

- SQL \*-mapper에서 작성

```xml
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.sb.school.persistence.dao">
	<select id="selectAll" resultType="StudentVO">
		SELECT * FROM tbl_student
	</select>

	<select id="findById" resultType="StudentVO">
		SELECT * FROM tbl_student WHERE st_num = #{st_num}
	</select>

	<insert id="insert" parameterType="StudentVO">
	 	<selectKey keyProperty="b_seq" resultType="Long" order="BEFORE">
 			SELECT seq_bbs.NEXTVAL FROM DUAL
 		</selectKey>
		INSERT INTO tbl_student
			(
				st_num,	st_name,
				st_grade, st_addr,
				st_tel
			) VALUES (
				#{st_num}, #{st_name},
				#{st_grade}, #{st_addr},
				#{st_tel}
			)
	</insert>

 	<insert id="insertFiles" parameterType="FilesVO">
 		INSERT INTO tbl_images(
 			i_seq,
 			i_bseq,
 			i_originalName,
 			i_imageName
 		)
 		SELECT seq_image.NEXTVAL, SUB.* FROM (
 		<foreach collection="list" separator="UNION ALL" item="vo">
 				SELECT	#{vo.i_bseq},
 						#{vo.i_originalName},
	 					#{vo.i_imageName}
 				FROM DUAL
 		</foreach>
 		) SUB
 	</insert>

	<update id="update" parameterType="StudentVO">
		UPDATE tbl_student SET
				st_name = #{st_name},
				st_grade = #{st_grade},
				st_addr = #{st_addr},
				st_tel = #{st_tel}
		WHERE st_num = #{st_num}
	</update>

	<delete id="delete">
		DELETE FROM tbl_student WHERE st_num = #{st_num}
	</delete>
</mapper>
```

## resultMap

```xml
<select id="findByIdScore" resultType="ScoreVO">
	SELECT * FROM tbl_score
		LEFT JOIN tbl_subject
			ON sc_sbcode = sb_code
	WHERE sc_stnum = #{sc_stnum}
</select>

<resultMap type="StudentVO" id="findByIdAndScore">
	<id property="st_num" column="st_num"/>

	<!-- @위의 쿼리를 실행시켜서 StudentVO에 있는 List<ScoreVO> 에 담는다 -->
	<collection property="scoreList" column="st_num"
			ofType="ScoreVO" select="findByIdScore">
	</collection>
</resultMap>

<!-- @위의 resultMap을 아래의 쿼리를 실행시킬 때 매핑한다 -->
<select id="findById" resultMap="findByIdAndScore">
	SELECT * FROM tbl_student WHERE st_num = #{st_num}
</select>
```

## class ServiceImpl implements Service

- Service interface 구현

- in Service..

```java
private final DAO dao;

public ServiceImpl(DAO dao){
    this.dao = dao
}
```

- in Controller..

```java
	@Autowired
	@Qualifier("ServiceImpl")
	private Service service;
```

- spring boot scan

`@MapperScan(value = {"com.sb.firstboot.persistence"})`

- java config (mybatis-mapper)

```java
@Autowired
private SqlSessionTemplate sqlSession;

@Bean
public UserDao userDao(){
	return sqlSession.getMapper(UserDao.class);
}
```

---
