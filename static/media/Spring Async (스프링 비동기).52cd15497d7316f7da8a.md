# Spring Async (스프링 비동기)

> private method는 사용 불가, public method만 사용 가능
> self-invocation(자가 호출) 불가, 즉 inner method는 사용 불가
> QueueCapacity 초과 요청에 대한 비동기 method 호출시 방어 코드 작성

- config

```java
@Configuration
@EnableAsync
public class AsyncConfig extends AsyncConfigurerSupport {

	@Bean("customAsyncExecutor")
    public Executor getAsyncExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(30);
        executor.setQueueCapacity(50);
        executor.setThreadNamePrefix("DDAJA-ASYNC-");
        executor.initialize();
        return executor;
    }
}
```

- asyncMethod

```java
@Service // 컨테이너로 주입받아야 작동함..
public class AsyncService {

	@Async("customAsyncExecutor")
	public void asyncMethod() {
		System.out.println("asyncMethod: " + Thread.currentThread().getId());
	}
}
```

- Controller

```java
@Autowired
private AsyncService asyncService; // 컨테이너로 주입받아야 작동함..

@GetMapping("async")
public String testAsync() throws Exception {
    System.out.println("asyncController: "+Thread.currentThread().getId());
    asyncService.asyncMethod();

    // 다른 로직들..
    return "home";
}
```
