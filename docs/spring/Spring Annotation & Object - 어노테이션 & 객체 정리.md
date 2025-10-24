# Spring Annotation & Object - 어노테이션 & 객체 정리

### @RequestParam

> HttpServletRequest 객체를 사용하는 방식과 동일, name, required, defaultValue 사용 가능

### @PathVariable

> `/users/{id}`을 받기 위해 @PathVariable 어노테이션 사용

### @ModelAttribute (Command 객체 사용)

> 요청 객체의 파라미터가 많을 경우 매우 편리한 방법입니다. 파라미터명과 같은 필드명을 가진 클래스를 만들어 메소드의 파라미터로 넣어주면 자동으로 해당 클래스 객체에 요청 데이터를 담아줍니다. 이 때 커맨드 클래스는 getter, setter가 존재해야 합니다. 어노테이션은 생략할 수 있지만 붙여주는게 유지보수를 위해 좋습니다.

### @SessionAttributes

> Model에 담은 데이터를 Session에 넣어둠

### @RequestBody

> request의 바디를 가져올 수 있음

### @ResponseBody

> response의 바디를 가져올 수 있음

### @Autowired, @Inject, @Resource

> scan을 해줘야 읽을 수 있다

### @Qualifier @Named

> @Component에 지정한 이름으로 검색

### @Primary

> 여러개의 @Component가 있을 경우 가장 우선할 클래스를 정할 수 있음

### @ResponseStatus

> Controller나 Exception에 사용하여 status 정보를 설정하여 리턴

### @ExceptionHandler

> Controller 단위로 사용하여 해당 클래스에서 발생하는 Exception을 받아 처리

### @MappedSuperclass

> Entity에 공통으로 적용되어야할 매핑정보(필드)가 필요할 때 사용한다 abstract 클래스에 매핑하여 상속시켜주자

### @CreatedBy @LastModifiedBy @CreatedDate @LastModifiedDate

> 생성한 사용자나 생성일시를 자동으로 생성해준다 EntityListenrs에 AuditorAware를 구현한 클래스를 넣어주어야한다

### @EntityListeners

> JPA Entity에 이벤트가 발생할 때 콜백을 처리하고 코드를 실행시킨다

### @PrePersist @PreRemove @PreUpdate @PostPersist @PostRemove @PostUpdate @PostLoad

> @EntityListeners가 들을 수 있는 콜백 메서드

### @EnableJpaAuditing

> Configuration 어노테이션을 통해 JPA에서 auditing을 가능하게 하는 어노테이션

### @RequiredArgsConstructor

> final이 붙거나 @NotNull 이 붙은 필드의 생성자를 자동 생성해주는 롬복 어노테이션

### @EqualsAndHashCode

> equals, hashCode 자동 생성 롬복 어노테이션

### @EnableWebSecurity

> springSecurityFilterChain을 자동으로 포함시켜준다

### @EnableSwagger2

> Swagger2 버전을 활성화 하는 어노테이션

- Swagger : REST API를 설계, 빌드, 문서화 및 사용하는데 도움이 되는 OpenAPI 사양을 중심으로 구축된 오픈소스 도구 세트 // http://localhost:8080/swagger-ui.html

### @ApiModel @ApiModelProperty @ApiOperation

> Swagger 어노테이션

### @PatchMapping @PostMapping

> Patch: 리소스의 일부를 변경 / Put: 리소스를 대체, 해당 리소스가 없을 경우 생성

### @ControllerAdvice @RestControllerAdvice

> 모든 @Controller에 대한, 전역적으로 발생할 수 있는 예외를 잡아서 처리할 수 있다.

### @Order

> 스프링 빈의 순서를 정할 수 있다.

### @InitBinder

> Spring Validator를 사용 시 @Valid 어노테이션으로 검증이 필요한 객체를 가져오기 전에 수행할 method를 지정해주는 어노테이션

### @EnableAsync

### @Async

### @EnableScheduling

### @Scheduled(fixedDelay = 1000)

---

### HttpSession

> request 객체에서 얻을 수 있지만 세션 객체만 필요한 경우라면 파라미터로 바로 받을 수 있습니다.

### Locale

> java.util.Locale 클래스의 객체입니다. 지리적, 국가적, 문화적 지역을 다루는 클래스로 지역적 분류에 따라 여러 가지 처리를 자동으로 해줍니다. 대표적으로 시간 표현 등이 있습니다.

### Model

> 스프링에서 제공해주는 데이터 공유 객체입니다.

### ModelAndView

> 스프링 2.0 이전에 사용하던 객체, 데이터와 뷰를 같이 담아서 리턴해줘야한다

### ModelMap

> Model 객체는 인터페이스이기 때문에, 실제 기능을 구현한 클래스가 ModelMap 객체입니다. 핸들러에서 자동으로 생성해서 전달해주는 Model 객체도 사실 ModelMap 객체를 생성해 오버라이딩 시킨 객체입니다. Model 객체와 차이는 거의 없으니 취향대로 쓰면 됩니다.

### HttpServletRequest

### HttpServletResponse

### MultipartServletRequest

### MultipartRequest

> 파일 업로드에 대한 요청을 받을 수 있는 스프링 API 입니다.

### MultipartFile

> multipart/form-data로 요청한 파일 데이터를 받을 수 있다.
