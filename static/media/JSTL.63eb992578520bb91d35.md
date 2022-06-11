# forEach에서 변수 두개 사용하기

```
<c:forEach items="${CLASS}" var="CLASS" varStatus="status">
    <c:set var="SCHE" value="${SCHE}"/>
    <div
        class="classes"
        data-schedule="${SCHE[status.index]}" data-class_code="${ CLASS.class_code}">
        ${CLASS.class_name}
    </div>
</c:forEach>
```