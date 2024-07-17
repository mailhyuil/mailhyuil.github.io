# Thymeleaf (타임리프)

- 자동완성 플러그인
  `http://www.thymeleaf.org/eclipse-plugin-update-site/`

## dependency 설정

```xml
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

## context 설정

```xml
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
            <beans:bean	class="org.thymeleaf.extras.springsecurity5.dialect.SpringSecurityDialect">
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

## html에 추가

```html
<html lang="ko" xmlns:th="http://www.thymeleaf.org"></html>
```

## layout에 추가

```html
<html lang="ko" xmlns:th="http://www.thymeleaf.org" xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout" layout:decorate="~{layout 경로}"></html>
```

# layout 문법

- 기본 문법

```
th:fragment=""
th:replace="~{파일경로 :: 조각이름}"
th:insert="~{파일경로 :: 조각이름}"
```

- fragment를 담을 html파일 생성

```
<th:block th:fragment="camp_home_js">
	<script th:inline="javascript" th:src="@{/static/js/camp_home.js}"></script>
</th:block>
```

- fragment를 html에 삽입하기

```
<th:block th:replace="fragment/config :: camp_home_js">
</th:block>
```

# thymeleaf 문법

```
th:text="${}" : <div th:text="${data}"></div>
th:value="${}" : <input type="text" id="userId" th:value="${userId} + '의 이름은 ${userName}"/>
th:href="@{}" : <a th:hrf="@{/boardListPage?currentPageNum={page}}"></a> // @는 루트패스를 뜻함
th:with="${}" : <div th:with=”userId=${number}” th:text=”${usesrId}”> // 변수 선언
th:attr="data-id=${id}" : <tr th:attr="data-id=${id}"></tr> // 태그에 attribute 넣기
th:src="@{}" : <img th:src="|@{/upload/}${BBS.img}|"/> // @{}${} 이어붙여 쓰기
th:selected="${category=='poster'}"

<!-- form -->
th:action="@{}"

th:object="${}" // controller에서 @ModelAttribute로 넘겨준 객체 (entity, vo or dto)
th:field="*{}" // th:object로 넘겨주 객체의 필드변수에 매핑, id, name, value 속성값이 자동으로 매핑된다

<!-- 조건, 반복 -->
th:if="${}" : <span th:if="${userNum} == 1"></span>

// if문 null값 체크
<input name="isbn" placeholder="isbn" th:if="${not #strings.isEmpty(value)}" th:value="${value.isbn}">
<input name="isbn" placeholder="isbn" th:if="${#strings.isEmpty(value)}">

th:unless="${}" : <span th:unless="${userNum} == 2"></span> // else, otherwise
th:each="변수 : ${list}" =  <li th:each="pageButton" : ${#numbers.sequece(paging.firstPage, paging.lastPage)}></li>

<th:block th:switch="${userNum}">
  <span th:case="1">권한1</span>
  <span th:case="2">권한2</span>
</th:block>

th:block
```

## 반복 값 넣기

```html
th:each="num : ${#numbers.sequence(from,to)}" th:each="num : ${#numbers.sequence(from,to,step)}}" //상태변수 반복할 오브젝트 명 + Stat ex)numStat
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

/* or */

<th:block th:each="num,index : ${#numbers.sequence(1,5)}">
  <div th:text="${num}"></div>
  <p th:text="${index.index}"></p>
  <p th:text="${index.count}"></p>
  <p th:text="${index.size}"></p>
  <p th:text="${index.current}"></p>
  <p th:text="${index.even}"></p>
  <p th:text="${index.odd}"></p>
  <p th:text="${index.first}"></p>
  <p th:text="${index.last}"></p>
</th:block>
```

## 자바스크립트에 변수 사용하기

```html
<script th:inline="javascript">
  /*<![CDATA[*/

  const thymeleafVar = [[pagination.search]];

  /*]]>*/
</script>
```

## 문자열 리터럴

`"|문자열 혹은 ${}|"`

# thymeleaf 내장객체, 내장함수

## #strings

```
th:if="${#strings.equals('a','a')}"
```

## #numbers

## #objects

## #arrays

## #lists

```
th:if="${not #lists.isEmpty(works.get(num).imageList)}"
```

## #maps

## #messages

## #dates

## #calendars

## #ctx

## #locale

## param

## session

## application

## #request

## #session

## #servletContext

## #uris
