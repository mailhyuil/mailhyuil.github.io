# Command Object (커맨드 객체)

- 컨트롤러에 @ModelAttribute("")를 사용하여 객체함수 생성

```java
@ModelAttribute("bbsVO")
private BBsVO bbsVO() {
	Date date = new Date(System.currentTimeMillis());
	SimpleDateFormat dayFormat = new SimpleDateFormat("yyyy-MM-dd");
	SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
	BBsVO bbsVO = BBsVO.builder()
					.b_date(dayFormat.format(date))
					.b_time(timeFormat.format(date))
					.b_writer("callor")
					.build();
	return bbsVO;
	}
```

- jstl form 을 사용
