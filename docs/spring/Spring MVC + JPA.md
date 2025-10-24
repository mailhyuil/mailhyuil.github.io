# Spring MVC + JPA

- pom.xml 에 추가

```xml
<!-- https://mvnrepository.com/artifact/org.springframework/spring-orm -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-orm</artifactId>
    <version>${org.springframework-version}</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.apache.commons/commons-dbcp2 -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-dbcp2</artifactId>
    <version>2.9.0</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.hibernate/hibernate-entitymanager -->
<dependency>
    <groupId>org.hibernate</groupId>
    <artifactId>hibernate-entitymanager</artifactId>
    <version>5.6.10.Final</version>
</dependency>

<!-- https://mvnrepository.com/artifact/com.oracle.database.jdbc/ojdbc8 -->
<dependency>
    <groupId>com.oracle.database.jdbc</groupId>
    <artifactId>ojdbc8</artifactId>
    <version>21.6.0.0.1</version>
</dependency>
```

- servlet-context 에 추가

```xml
<tx:annotation-driven/>

<bean id="dataSource" class="org.apache.commons.dbcp2.BasicDataSource">
    <property name="driverClassName" value="oracle.jdbc.driver.OracleDriver"/>
    <property name="url" value="jdbc:oracle:thin:@localhost:1521:xe"/>
    <property name="username" value="USER1"/>
    <property name="password" value="12341234"/>
</bean>

<bean id="transactionManager" class="org.springframework.orm.jpa.JpaTransactionManager">
    <property name="dataSource" ref="dataSource"/>
</bean>

<!-- JPA 예외를 스프링 예외로 변환 -->
<bean class="org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor"/>

<bean id="entityManagerFactory" class="org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean">
    <property name="dataSource" ref="dataSource"/>
    <property name="packagesToScan" value="com.sb.school.domain"/> <!-- @Entity 탐색 시작 위치 -->
    <property name="jpaVendorAdapter">
        <!-- 하이버네이트 구현체 사용 -->
        <bean class="org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter"/>
    </property>
    <property name="jpaProperties"> <!-- 하이버네이트 상세 설정 -->
        <props>
            <prop key="hibernate.dialect">org.hibernate.dialect.OracleDialect</prop> <!-- 방언 -->
            <prop key="hibernate.show_sql">true</prop>                   <!-- SQL 보기 -->
            <prop key="hibernate.format_sql">true</prop>                 <!-- SQL 정렬해서 보기 -->
            <prop key="hibernate.use_sql_comments">true</prop>           <!-- SQL 코멘트 보기 -->
            <prop key="hibernate.id.new_generator_mappings">true</prop>  <!-- 새 버전의 ID 생성 옵션 -->
            <prop key="hibernate.hbm2ddl.auto">create</prop>             <!-- DDL 자동 생성 -->
        </props>
    </property>
</bean>

<default-servlet-handler/>

<interceptors>
    <beans:bean class="org.springframework.orm.jpa.support.OpenEntityManagerInViewInterceptor">
        <beans:property name="entityManagerFactory" ref="entityManagerFactory" />
    </beans:bean>
</interceptors>
```

- domain (vo)

```java
@Entity
@Table(name = "TBL_USER")
public class User {
    @Id
    @Column(name = "USERNAME")
	private String username;
	private String password;
	private String name;
	private String role;
	private String email;
}
```

- repository (dao)

```java
@Repository
public class UserRepository {

    @PersistenceContext
    EntityManager em;

    public void save(User user) {
    	em.persist(user);
    }

    public User findById(String username) {
    	return em.find(User.class, username);
    }
}
```

- service

```java
@Service
public class UserService {
	@Autowired
	private UserRepository userRepository;

	@Transactional // transaction 처리 안하면 에러
    public String join(User user) {
        userRepository.save(user);
        return user.getUsername();
    }
}
```

# JPQL

```java
	Query query1 = em.createQuery("select u from User u where u.username = :username", User.class);
	query1.setParameter("username", "sb"); // 선택이 아닌 필수
	System.out.println("result1 : " + query1.getSingleResult());

//	Query query2 = em.createQuery("select u from User u", User.class);
//	System.out.println("result2 : " + query2.getResultList());
```

# QueryDSL

1. pom.xml

- dependency 추가

```xml
<!-- https://mvnrepository.com/artifact/com.querydsl/querydsl-jpa -->
<dependency>
    <groupId>com.querydsl</groupId>
    <artifactId>querydsl-jpa</artifactId>
    <version>5.0.0</version>
</dependency>

<!-- https://mvnrepository.com/artifact/com.querydsl/querydsl-apt -->
<dependency>
    <groupId>com.querydsl</groupId>
    <artifactId>querydsl-apt</artifactId>
    <version>5.0.0</version>
</dependency>
```

- plugin 추가

```xml
<plugin>
    <groupId>com.mysema.maven</groupId>
    <artifactId>apt-maven-plugin</artifactId>
    <version>1.1.3</version>
    <executions>
        <execution>
            <goals>
                <goal>process</goal>
            </goals>
            <configuration>
                <outputDirectory>target/generated-sources/java</outputDirectory>
                <processor>com.querydsl.apt.jpa.JPAAnnotationProcessor</processor>
            </configuration>
        </execution>
    </executions>
</plugin>
```

- build.gradle

```groovy
buildscript { // 맨위에 위치
    dependencies {
        classpath("gradle.plugin.com.ewerk.gradle.plugins:querydsl-plugin:1.0.10")
    }
}

apply plugin: "com.ewerk.gradle.plugins.querydsl"

dependencies {
    //querydsl 추가
    implementation 'com.querydsl:querydsl-jpa'
    //querydsl 추가
    implementation 'com.querydsl:querydsl-apt'
}

def querydslDir = "$buildDir/generated/querydsl"

querydsl {
    library = "com.querydsl:querydsl-apt"
    jpa = true
    querydslSourcesDir = querydslDir
}

sourceSets {
    main {
        java {
            srcDirs = ['src/main/java', querydslDir]
        }
    }
}

compileQuerydsl{
    options.annotationProcessorPath = configurations.querydsl
}

configurations {
    querydsl.extendsFrom compileClasspath
}
```

2. 기본 문법

```java
//	JPAQuery<EntityManager> query = new JPAQuery<>(em);
    JPAQueryFactory queryFactory = new JPAQueryFactory(em);

//	QUser user = new QUser("u");
	QUser user = QUser.user;

	User foundUser = (User) queryFactory
//				  .selectFrom(qUser) // select + from
				  .from(user)
				  .where(user.username.eq("sb"))
				  .orderBy(user.username.desc())
				  .fetchOne();

	System.out.println("result : " + foundUser);
```

- java config (QueryDSL-JPAQueryFactory)

```java
@PersistenceContext
private EntityManager entityManager;

@Bean
public JPAQueryFactory jpaQueryFactory() {
    return new JPAQueryFactory(entityManager);
}
```
