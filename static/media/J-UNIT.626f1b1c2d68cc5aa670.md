# Junit (유닛 테스트)

## test annotation (테스트 어노테이션)

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

- Assertions 객체
```
Assertions.assertEquals();
Assertions....
```
