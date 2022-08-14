# Thymeleaf(타임리프)
* 자동완성 플러그인
`http://www.thymeleaf.org/eclipse-plugin-update-site/`
1. dependency 설정
```
<!-- https://mvnrepository.com/artifact/org.thymeleaf/thymeleaf-spring5 -->
<dependency>
    <groupId>org.thymeleaf</groupId>
    <artifactId>thymeleaf-spring5</artifactId>
    <version>3.0.15.RELEASE</version>
</dependency>

<!-- https://mvnrepository.com/artifact/nz.net.ultraq.thymeleaf/thymeleaf-layout-dialect -->
<dependency>
    <groupId>nz.net.ultraq.thymeleaf</groupId>
    <artifactId>thymeleaf-layout-dialect</artifactId>
    <version>3.1.0</version>
</dependency>
```

2. context 설정
```
<beans:bean id="templateResolver"
    class="org.thymeleaf.templateresolver.ServletContextTemplateResolver">
    <beans:property name="prefix" value="/WEB-INF/views/" />
    <beans:property name="suffix" value=".html" />
    <beans:property name="templateMode" value="HTML" />
    <beans:property name="cacheable" value="false" />
</beans:bean>

<beans:bean id="templateEngine" class="org.thymeleaf.spring5.SpringTemplateEngine">
    <beans:property name="templateResolver" ref="templateResolver"/>
    <beans:property name="enableSpringELCompiler" value="true"/>
    <beans:property name="additionalDialects">
        <beans:set>
            <beans:bean class="nz.net.ultraq.thymeleaf.layoutdialect.LayoutDialect">
            </beans:bean>			
        </beans:set>	
    </beans:property>
</beans:bean>

<beans:bean class="org.thymeleaf.spring5.view.ThymeleafViewResolver">
    <beans:property name="templateEngine" ref="templateEngine"/>
    <beans:property name="characterEncoding" value="UTF-8"/>
    <beans:property name="order" value="1"/>
</beans:bean>
```

- html에 추가
```
<html lang="ko"
	xmlns:th="http://www.thymeleaf.org">
```

- layout에 추가
```
<html lang="ko"
	xmlns:th="http://www.thymeleaf.org"
	xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout"
    layout:decorate="~{layout 경로}">
```

- layout 문법
```
layout:fragment="content"
```

```
th:fragment=""
th:replace="~{파일경로 :: 조각이름}"
th:insert="~{파일경로 :: 조각이름}"
```



- thymeleaf 문법
```
th:text="${}" : <div th:text="${data}"></div>
th:value="${}" : <input type="text" id="userId" th:value="${userId} + '의 이름은 ${userName}"/>
th:href="@{}" : <a th:hrf="@{/boardListPage?currentPageNum={page}}"></a> // @는 루트패스를 뜻함
th:with="${}" : <div th:with=”userId=${number}” th:text=”${usesrId}”> // 변수 선언

<!-- form -->
th:action="@{}"
th:object="${}"
th:field="*{}" // id, name, value 속성값이 자동으로 매핑된다

<!-- 조건, 반복 -->
th:if="${}" : <span th:if="${userNum} == 1"></span> 
th:unless="${}" : <span th:unless="${userNum} == 2"></span> // else, otherwise
th:each="변수 : ${list}" =  <li th:each="pageButton" : ${#numbers.sequece(paging.firstPage, paging.lastPage)}></li>

<th:block th:switch="${userNum}"> 
  <span th:case="1">권한1</span> 
  <span th:case="2">권한2</span> 
</th:block>

th:block
```

- 반복 값 넣기
```
th:each="num : ${#numbers.sequence(from,to)}"
th:each="num : ${#numbers.sequence(from,to,step)}}"

//상태변수
반복할 오브젝트 명 + Stat ex)numStat

// ex)
<th:block th:each="num : ${#numbers.sequence(1,5)}">
	<div th:text="${num}"></div>
    <p th:text="${numStat.index}"></p>
    <p th:text="${numStat.count}"></p>
    <p th:text="${numStat.size}"></p>
    <p th:text="${numStat.current}"></p>
    <p th:text="${numStat.even}"></p>
    <p th:text="${numStat.odd}"></p>
    <p th:text="${numStat.first}"></p>
    <p th:text="${numStat.last}"></p>
</th:block>
```

- 문자열 리터럴

`"|문자열 혹은 ${}|"`