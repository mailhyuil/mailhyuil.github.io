# spring Validate - 서버사이드 유효성 검사

```xml
<!-- https://mvnrepository.com/artifact/javax.validation/validation-api -->
<dependency>
	<groupId>javax.validation</groupId>
	<artifactId>validation-api</artifactId>
	<version>2.0.1.Final</version>
</dependency>

<!-- https://mvnrepository.com/artifact/org.hibernate.validator/hibernate-validator -->
<dependency>
	<groupId>org.hibernate.validator</groupId>
	<artifactId>hibernate-validator</artifactId>
	<version>6.2.3.Final</version>
</dependency>
```

## VO 클래스

```java
public class VO {

	private long e_seq;

	private String e_from_email;

	@Email(message = "Email 형식이 아닙니다")
	@NotEmpty(message = "받는사람 Email 은 반드시 입력하세요")
	private String e_to_email;

	@NotEmpty(message = "보내는 사람 이름은 null 일수 없습니다")
	private String e_from_name;

	@Length(min = 1, max = 100,
			message = "받는 사람이름은 1글자 ~ 100글자까지만 가능")
	@NotEmpty(message = "받는 사람 이름은 반드시 입력하세요")
	private String e_to_name;

	@NotEmpty(message = "제목을 입력해야 합니다")
	private String e_subject;
	private String e_content;

	// @Size(min = 1, max = 10, message = "num 는 1부터 10사이 값이어야 합니다")
	private String e_send_date;
	private String e_send_time;

	// @Min(value=1,message = "num 는 1보다 커야합니다")
	// @Max(value=10, message ="num 는 10보다 작아야 합니다")
	private int num;

	// @DecimalMin(value="1",message = "decimal 은 십진수 1보다 커야 합니다")
	// @DecimalMax(value="10", message = "decimal 은 십진수 10보자 작아야 합니다")
	private int decimal;

	// @Pattern(regexp = "^.*(?=^.{8,15}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$")
	private String password;

}
```

## Errors

## BindingResult: Errors를 상속받아 추가적인 기능을 제공

> 둘다 사용가능 //@Valid 객체 뒤에 위치해야함

## Controller

```java
@GetMapping("join")
public String join(@ModelAttribute("user") User user) { // User entity를 뷰로 넘겨준다
	return null;
}

@PostMapping("join")
public String join(@Valid User user, BindingResult result){

	if(result.hasErrors()) {
		return "/user/join";
	}

	userService.join(user);
	return "redirect:/";
}
```

- BindingResult는 DispatcherServlet이 뷰에 넘겨준다

## View (thymeleaf)

```html
<form
  th:action="@{/user/join}"
  method="post"
  th:object="${user}">
  <div>
    <label>Username</label>:
    <input
      th:field="*{username}"
      autofocus="autofocus" />
    <p
      th:errors="*{username}"
      th:if="${#fields.hasErrors('username')}"></p>
  </div>
  <div>
    <label>Password</label>:
    <input
      th:field="*{password}"
      type="password" />
    <p
      th:errors="*{password}"
      th:if="${#fields.hasErrors('password')}"></p>
  </div>
  <div>
    <label>Repassword</label>:
    <input
      name="re_password"
      type="password" />
  </div>
  <div>
    <label>Email</label>:
    <input th:field="*{email}" />
    <p
      th:errors="*{email}"
      th:if="${#fields.hasErrors('email')}"></p>
  </div>
  <div>
    <label>Nickname</label>:
    <input th:field="*{nickname}" />
    <p
      th:errors="*{nickname}"
      th:if="${#fields.hasErrors('nickname')}"></p>
  </div>
  <div>
    <button>Join</button>
  </div>
</form>
```

## View (JSP)

```jsp
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<spring:hasBindErrors name="userVO">

	<c:if test="${errors.hasFieldErrors('name') }">
		<strong>${errors.getFieldError( 'name' ).defaultMessage }</strong>
	</c:if>

</spring:hasBindErrors>
```

## Error 추가하기

```
if(ret == -1) {
	result.addError(new FieldError("User", "username", "이미 존재하는 아이디입니다."));
	return "/user/join";
}
```
