# Date

```java
Date date = new Date(System.currentTimeMillis()); // 현재시각을 담고있는 date객체 생성

SimpleDateFormat dayFormat = new SimpleDateFormat("yyyy-MM-dd"); // date객체를 formatting할 객체
SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");

dayFormat.format(date); //format메소드
timeFormat.format(date);
```
