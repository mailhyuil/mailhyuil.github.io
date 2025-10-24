# java Timer - 타이머

```java
private Timer timer; // Timer 생성

public class TaskToDo extends TimerTask { // TimerTask 생성
    int count = 0;

    @Override
    public void run() {
        count += 1;
        System.out.println(count);

    }
}

@Scheduled(fixedDelay = 1000)
public void timer() {
    timer.schedule(new TaskToDo(), 2000, 1000); // 스케줄링
}
```
