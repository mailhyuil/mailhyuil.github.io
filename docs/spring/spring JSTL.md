# spring JSTL

- forEach에서 변수 두개 사용하기

```jsp
<c:forEach items="${CLASS}" var="CLASS" varStatus="status">
    <c:set var="SCHE" value="${SCHE}"/>
    <div
        class="classes"
        data-schedule="${SCHE[status.index]}" data-class_code="${ CLASS.class_code}">
        ${CLASS.class_name}
    </div>
</c:forEach>
```

- when

```jsp
<c:choose>
    <c:when test="${not empty USER }">
        <h1>${USER.name} 님 안녕하세요</h1>
        <a href="/logout">로그아웃</a>
    </c:when>

    <c:otherwise>
        <h1>hello</h1>
        <a href="/login">로그인</a>
        <a href="/join">회원가입</a>
    </c:otherwise>
</c:choose>
```
