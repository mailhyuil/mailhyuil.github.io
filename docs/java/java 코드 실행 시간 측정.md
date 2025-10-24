# java 코드 실행 시간 측정

```java
long beforeTime = System.currentTimeMillis(); // 코드 실행 전 시간

    for (int i = 0; i < 1000; i++) { // 측정할 코드
        System.out.println(i);
    }

long afterTime = System.currentTimeMillis(); // 코드 실행 후 시간

System.out.println("걸린시간:" + (afterTime - beforeTime)); // 실행 후 시간 - 실행 전 시간
```
