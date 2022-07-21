# Spring Mybatis 세팅 순서!

## 1. pom.xml
- mybatis
- mybatis-spring
- apache-commons(commons-dbcp2)
- spring-jdbc
- oracle-jdbc(ojdbc8)


## 2. web.xml
```
<param-name>contextConfigLocation</param-name>
<param-value>../*-context.xml</param-value>
```


## 3. mybatis-context.xml
- beans, context, mybatis-spring, tx

- DataSource
```
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
```
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
```
<bean class="org.mybatis.spring.SqlSessionTemplate">
	<constructor-arg ref="sqlSession" />
</bean>
```
- package scan
```
<mybatis-spring:scan base-package="com.sb.school.dao" /> <!-- Dao 위치 -->
```


## 4-1. interface DAO
- SQL DAO에서 작성
```
@Select("SELECT * FROM tbl_student")
public List<StudentVO> selectAll();
```
> return값 `VO` or `int`

## 4-2. mapper/*-mapper.xml 에서 작성
- SQL *-mapper에서 작성
```
<!DOCTYPE mapper
PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="com.sb.school.Daopath">
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

## 5. interface Service extends DAO
- Service interface가 DAO 상속


## 6. class ServiceImpl implements Service
- Service interface 구현


- in Service..
```
private final DAO dao;

public ServiceImpl(DAO dao){
    this.dao = dao
}
```
- in Controller..
```
	@Autowired
	@Qualifier("ServiceImpl")
	private Service service;
```


---