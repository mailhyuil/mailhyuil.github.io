# spring J-UNIT

## spring-test & j-unit

```
<!-- https://mvnrepository.com/artifact/org.springframework/spring-test -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>5.2.22.RELEASE</version>
    <scope>test</scope>
</dependency>

```

- spring-test annotation
  > 필요한 설정만 따로 만들기!

```
@WebAppConfiguration
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"file:src/test/*-context.xml"})

@Autowired

```

- test annotation (테스트 어노테이션)

```
//static 메소드로 작성
@BeforeAll
@AfterAll
```

```
@BeforeEach
@AfterEach

@Test
@DisplayName("")
@Disabled
```

`@WebMvcTest(.class)`
`@AutoConfigureWebMvc`
`@MockBean`

- BDDMockito 객체

```
new BDDMockito().given(bbsService.selectAll()).willReturn(
        new ArrayList<Bbs>()
);
```

- Assertions(단언) 객체 // 주로 static으로 선언

```
//일반 단언
assertEquals();
assertTrue();
...

// 햄크레스트 단언
assertThat(a, is(a));
assertThat(a, equalsTo(a));
...
```

- 예외

```java
@Test(expected=Exception.class)

try{
    account.withdraw();
} catch(Exception expected){
    assertThat(expected.getMessage(), equalTo("balance only 0"));
}

@Rule
public ExpectedException thrown = ExpectedException.none();

@Test
public void exceptionRule(){
    thrown.expect(Exception.class);
    thrown.expectMessage("balance only 0");

    account.withdraw();
}
```
