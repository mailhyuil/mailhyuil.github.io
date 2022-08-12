# JPA

- pom.xml

```
<!-- JPA, 하이버네이트 -->
<dependency>
	<groupId>org.hibernate</groupId>
	<artifactId>hibernate-entitymanager</artifactId>
	<version>${hibernate.version}</version>
</dependency>

<!-- jdbc -->
<dependency>
	<groupId>com.oracle.database.jdbc</groupId>
	<artifactId>ojdbc8</artifactId>
	<version>21.5.0.0</version>
</dependency>
```

- resources/META-INF/persistence.xml

```
<?xml version="1.0" encoding="UTF-8"?>
<persistence xmlns="http://xmlns.jcp.org/xml/ns/persistence" version="2.1">

    <persistence-unit name="jpabook">

        <properties>

            <!-- 필수 속성 -->
            <property name="javax.persistence.jdbc.driver" value="oracle.jdbc.driver.OracleDriver"/>
            <property name="javax.persistence.jdbc.user" value="test"/>
            <property name="javax.persistence.jdbc.password" value="1234"/>
            <property name="javax.persistence.jdbc.url" value="jdbc:oracle:thin:@localhost:1521:xe"/>
            
            <property name="hibernate.dialect" value="	org.hibernate.dialect.OracleDialect" />

            <!-- 옵션 -->
            <property name="hibernate.show_sql" value="true" />
            <property name="hibernate.format_sql" value="true" />
            <property name="hibernate.use_sql_comments" value="true" />
            <property name="hibernate.id.new_generator_mappings" value="true" />

            <!--<property name="hibernate.hbm2ddl.auto" value="create" />-->
        </properties>
    </persistence-unit>

</persistence>
```

- Entity 객체

```
@Getter
@Setter
@Entity
@Table(name="MEMBER")
public class Member {

    @Id
    @Column(name = "ID")
    private String id;

    @Column(name = "NAME")
    private String username;

    private Integer age;
}
```

- main

```
//엔티티 매니저 팩토리 생성
EntityManagerFactory emf = Persistence.createEntityManagerFactory("jpabook");
EntityManager em = emf.createEntityManager(); //엔티티 매니저 생성

EntityTransaction tx = em.getTransaction(); //트랜잭션 기능 획득

try {
    tx.begin(); //트랜잭션 시작
    logic(em);  //비즈니스 로직
    tx.commit();//트랜잭션 커밋

} catch (Exception e) {
    e.printStackTrace();
    tx.rollback(); //트랜잭션 롤백
} finally {
    em.close(); //엔티티 매니저 종료
}
    emf.close(); //엔티티 매니저 팩토리 종료
}
```

- logic

```
public static void logic(EntityManager em) {

	String id = "1";
	Member member = new Member();
	member.setId(id);
	member.setUsername("지한");
	member.setAge(2);

	//등록
	em.persist(member);
	Member findMember = em.find(Member.class, "0");
	findMember.setUsername("영한");
	
	//수정
	member.setAge(20);

	//한 건 조회
	Member findMember = em.find(Member.class, id);
	System.out.println("findMember=" + findMember.getUsername() + ", age=" + findMember.getAge());

	//목록 조회
	List<Member> members = em.createQuery("select m from Member m", Member.class).getResultList();
	
	for(Member member:members) {
		System.out.println(member.getUsername());
	}

	//삭제
	em.remove(findMember);

}
```
# SpringMVC + JPA

- pom.xml 에 추가

```
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
```
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
```

- domain (vo)
```
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
```
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
```
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
```
	Query query1 = em.createQuery("select u from User u where u.username = :username", User.class); 
	query1.setParameter("username", "sb"); // 선택이 아닌 필수
	System.out.println("result1 : " + query1.getSingleResult());
		 
//	Query query2 = em.createQuery("select u from User u", User.class);
//	System.out.println("result2 : " + query2.getResultList());
```

# QueryDSL

1. pom.xml
- dependency 추가
```
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
```
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

```
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
```
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
# spring-data

1. pom.xml
```
<!-- https://mvnrepository.com/artifact/org.springframework.data/spring-data-commons -->
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-commons</artifactId>
    <version>2.3.9.RELEASE</version>
</dependency>
<!-- https://mvnrepository.com/artifact/org.springframework.data/spring-data-jpa -->
<dependency>
    <groupId>org.springframework.data</groupId>
    <artifactId>spring-data-jpa</artifactId>
    <version>2.3.9.RELEASE</version>
</dependency>
```

2. servlet-context.xml
`<jpa:repositories base-package="com.sb.school.repository"></jpa:repositories>`

3. repository
```
public interface UserRepository extends JpaRepository<User, String>{
    
	public User findOneByUsername(String username);
    
    public List<User> findByPassword(String password);
    
    public List<User> findByClassCode(Classes classCode);
    
    public User findOneByName(String name);
}
```

## hibernate-dialect (방언)

- oracle : `org.hibernate.dialect.OracleDialect`
- mysql : `org.hibernate.dialect.MySQLDialect`
- mariaDB : `org.hibernate.dialect.MariaDBDialect`
- progress : `org.hibernate.dialect.ProgressDialect`