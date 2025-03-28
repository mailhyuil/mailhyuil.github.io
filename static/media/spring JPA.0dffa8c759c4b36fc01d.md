# JPA

## pom.xml

```xml
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

## resources/META-INF/persistence.xml

```xml
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

## Entity 객체

```java
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

## Main

```java
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
```

## logic

```java
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
