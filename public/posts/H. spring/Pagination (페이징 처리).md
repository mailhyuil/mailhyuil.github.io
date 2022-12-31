# Pagination (페이징 처리)

## pagination 처리용 객체

```java
public class Pagination {
    private int PAGE_SIZE; // 한번에 보여줄 페이지 수
    private int LIST_SIZE; // 한번에 보여줄 리스트 수
    private int startPage; // 한번에 보이는 페이지 중 첫번째 번호
    private int endPage; //한번에 보이는 페이지 중 마지막 번호
    private int theLastPage; // 마지막 페이지 번호
    private int currentPage; // 현재 페이지
    private int cri; // criterion or cursor // 조회시 사용할 기준(커서) 역할

    private boolean prev;
    private boolean next;

    public void paginate(int currentPage, int totalListSize, int PAGE_SIZE, int LIST_SIZE) {
        this.PAGE_SIZE = PAGE_SIZE;
        this.LIST_SIZE = LIST_SIZE;

        this.theLastPage = (int) Math.ceil(totalListSize / (double) LIST_SIZE); // * int값으로만 나누면 자동 형변환 돼버린다

        this.currentPage = currentPage;

        this.endPage = (int) (Math.ceil(currentPage / (double) PAGE_SIZE)) * PAGE_SIZE;
        this.endPage = endPage > theLastPage ? theLastPage : endPage; // 마지막 번호가 최종 페이지 번호보다 크면 최종 페이지 번호 반환

        this.startPage = this.endPage - (PAGE_SIZE - 1);
        this.startPage = startPage < 1 ? 1 : startPage; // 시작번호가 1보다 작으면 1을 반환

        this.cri = (currentPage - 1) * LIST_SIZE;

        //이전 버튼 상태
        this.prev = startPage == 1 ? false : true;

        //다음 버튼 상태
        this.next = currentPage >= theLastPage ? false : true;
    }
}
```

## mySQL pagination query

```xml
<select id="getTotalListSize" resultType="int">
    select count(*) as listCnt from bbs
</select>

<select id="getBoardList" resultType="Bbs">
    SELECT * from bbs limit #{cri}, #{LIST_SIZE}
</select>
```

## controller

```java
@GetMapping("/board")
public String board(Model model,
                    @RequestParam(required = false, defaultValue = "1") int page){
    int totalListCount = bbsDao.getBoardListCnt();

    Pagination pagination = new Pagination(); // 페이지네이션 객체 생성

    pagination.paginate(page, totalListCount); // 페이지네이션 초기화

    model.addAttribute("pagination", pagination);
    model.addAttribute("BBS_LIST", bbsDao.getBoardList(pagination));
    return null;
}
```

## view

```html
<ul style="list-style:none; display: flex">
  <li
    style="padding:.5rem 1rem;margin:2px;background-color:skyblue;color:white;">
    <a th:onclick="|location.href = '/bbs/board?page=1'|">&#60;&#60;</a>
  </li>
  <th:block th:if="${pagination.prev}">
    <li
      style="padding:.5rem 1rem;margin:2px;background-color:skyblue;color:white;">
      <a th:onclick="|fn_prev(${pagination.currentPage})|">&#60;</a>
    </li>
  </th:block>
  <th:block
    th:each="index:${#numbers.sequence(pagination.startPage, pagination.endPage)}">
    <li
      th:style="|padding:.5rem 1rem;margin:2px;color:white;${pagination.currentPage==index?'background-color:red':'background-color:skyblue'}|">
      <a
        th:onclick="|fn_pagination(${index})|"
        th:text="${index}"></a>
    </li>
  </th:block>
  <th:block th:if="${pagination.next}">
    <li
      style="padding:.5rem 1rem;margin:2px;background-color:skyblue;color:white;">
      <a th:onclick="|fn_next(${pagination.currentPage})|">&#62;</a>
    </li>
  </th:block>
  <li
    style="padding:.5rem 1rem;margin:2px;background-color:skyblue;color:white;">
    <a
      th:onclick="|location.href = '/bbs/board?page=${pagination.theLastPage}'|"
      >&#62;&#62;</a
    >
  </li>
</ul>

<script>
  function fn_prev(currentPage) {
    var page = currentPage - 1;
    var url = "/bbs/board";
    url = url + "?page=" + page;
    location.href = url;
  }

  function fn_pagination(page) {
    var url = "/bbs/board";
    url = url + "?page=" + page;
    location.href = url;
  }

  function fn_next(currentPage) {
    var page = currentPage + 1;
    var url = "/bbs/board";
    url = url + "?page=" + page;
    location.href = url;
  }
</script>
```

# 페이징 처리 + 검색

## pagination 처리용 객체 + search 필드

```java
public class Pagination {
    private String search = "";
    private int PAGE_SIZE; // 한번에 보여줄 페이지 수
    private int LIST_SIZE; // 한번에 보여줄 리스트 수
    private int startPage; // 한번에 보이는 페이지 중 첫번째 번호
    private int endPage; //한번에 보이는 페이지 중 마지막 번호
    private int theLastPage; // 마지막 페이지 번호
    private int currentPage; // 현재 페이지
    private int cri; // criterion or cursor // 조회시 사용할 기준(커서) 역할

    private boolean prev;
    private boolean next;

    public void paginate(int currentPage, int totalListSize) {
        this.search = this.search == null ? "" : this.search;

        this.PAGE_SIZE = 3;
        this.LIST_SIZE = 5;

        this.theLastPage = (int) Math.ceil((float)totalListSize / LIST_SIZE); // * int값으로만 나누면 자동 형변환 돼버린다

        this.currentPage = currentPage;

        this.startPage = currentPage - (currentPage - 1) % PAGE_SIZE;
        this.startPage = startPage < 1 ? 1 : startPage; // 시작번호가 1보다 작으면 1을 반환

        this.endPage = startPage+(PAGE_SIZE-1);
        this.endPage = endPage > theLastPage ? theLastPage : endPage; // 마지막 번호가 최종 페이지 번호보다 크면 최종 페이지 번호 반환

        this.cri = (currentPage-1) * LIST_SIZE;

        //이전 버튼 상태
        this.prev = startPage == 1 ? false : true;

        //다음 버튼 상태
        this.next = currentPage >= theLastPage ? false : true;
    }
}
```

## mySQL pagination query + search query

```xml
<select id="getBoardListCnt" resultType="int">
    select count(*) as listCnt
    FROM (SELECT *
            FROM bbs
            WHERE username LIKE CONCAT('%', #{search}, '%')
                OR content LIKE CONCAT('%', #{search}, '%')
                OR title LIKE CONCAT('%', #{search}, '%')) AS SUB
</select>

<select id="getBoardList" resultType="Bbs">
    SELECT *
    FROM (SELECT *
            FROM bbs
            WHERE username LIKE CONCAT('%', #{search}, '%')
                OR content LIKE CONCAT('%', #{search}, '%')
                OR title LIKE CONCAT('%', #{search}, '%')) AS SUB
        LIMIT #{cri}, #{LIST_SIZE}
</select>
```

- controller + search

```java
@GetMapping("/board")
public String board(Model model,
                    @RequestParam(required = false, defaultValue = "1") int page,
                    Pagination pagination){

    int totalListCount = bbsDao.getBoardListCnt(pagination.getSearch());
    pagination.paginate(page, totalListCount); // 페이지네이션 초기화

    model.addAttribute("pagination", pagination);
    model.addAttribute("BBS_LIST", bbsDao.getBoardList(pagination));
    return null;
}
```

## view + search

```html
<form>
  <input
    type="text"
    name="search"
    th:value="${pagination.search}" />
  // 검색어를 유지시키기 위해 value 값에 넣어두기
  <button>검색</button>
</form>

<ul style="list-style:none; display: flex">
  <li
    style="padding:.5rem 1rem;margin:2px;background-color:skyblue;color:white;">
    <a th:onclick="|location.href = '/bbs/board?page=1'|">&#60;&#60;</a>
  </li>
  <th:block th:if="${pagination.prev}">
    <li
      style="padding:.5rem 1rem;margin:2px;background-color:skyblue;color:white;">
      <a th:onclick="|fn_prev(${pagination.currentPage})|">&#60;</a>
    </li>
  </th:block>
  <th:block
    th:each="index:${#numbers.sequence(pagination.startPage, pagination.endPage)}">
    <li
      th:style="|padding:.5rem 1rem;margin:2px;color:white;${pagination.currentPage==index?'background-color:red':'background-color:skyblue'}|">
      <a
        th:onclick="|fn_pagination(${index})|"
        th:text="${index}"></a>
    </li>
  </th:block>
  <th:block th:if="${pagination.next}">
    <li
      style="padding:.5rem 1rem;margin:2px;background-color:skyblue;color:white;">
      <a th:onclick="|fn_next(${pagination.currentPage})|">&#62;</a>
    </li>
  </th:block>
  <li
    style="padding:.5rem 1rem;margin:2px;background-color:skyblue;color:white;">
    <a
      th:onclick="|location.href = '/bbs/board?page=${pagination.theLastPage}'|"
      >&#62;&#62;</a
    >
  </li>
</ul>

/* 현재 페이지를 바꿔도 검색어 유지되게 */
<script th:inline="javascript">
  /*<![CDATA[*/
  function fn_prev(currentPage) {
      var page = currentPage - 1;
      var url = "/bbs/board";
      url = url + "?page=" + page;
      url = url + "&search="+ [[${pagination.search}]];
      location.href = url;
  }

  function fn_pagination(page) {
      var url = "/bbs/board";
      url = url + "?page=" + page;
      url = url + "&search="+ [[${pagination.search}]];
      location.href = url;
  }

  function fn_next(currentPage) {
      var page = currentPage + 1;
      var url = "/bbs/board";
      url = url + "?page=" + page;
      url = url + "&search="+ [[${pagination.search}]];
      location.href = url;
  }
  /*]]>*/
</script>
```

## QueryDsl

```java
QueryModifiers queryModifiers = new QueryModifiers(20L, 10L); //limit, offset
List<Item> list = query
                    .from(item)
                    .restrict(queryModifiers)
                    .fetch(item);
```
