# spring cookie

## 쿠키 생성

```java
@PostMapping("path")
public String path(HttpServletResponse response) {

   Cookie myCookie = new Cookie("cookieName", cookieValue);
   myCookie.setMaxAge(쿠키 expiration 타임 (int));
   myCookie.setPath("/"); // 모든 경로에서 접근 가능 하도록 설정
   response.addCookie(myCookie);

   return null;
}
```

## 쿠키 삭제

```java
@PostMapping("logout")
public String logout(HttpServletResponse response) {

	Cookie c = new Cookie("JSESSIONID", null);
	c.setPath("/");
	c.setMaxAge(0);
	response.addCookie(c);

	return "redirect:/";
}
```
