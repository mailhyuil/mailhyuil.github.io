# Spring Reactor (스프링 리액터)

## pom.xml

```xml
<!-- webflux 웹에서 Flux를 사용할 수 있게 -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-webflux</artifactId>
    <version>${org.springframework-version}</version>
</dependency>

<!-- reactor-core -->
<dependency>
    <groupId>io.projectreactor</groupId>
    <artifactId>reactor-core</artifactId>
    <version>3.4.22</version>
</dependency>

<!-- reactor-netty -->
<dependency>
    <groupId>io.projectreactor.netty</groupId>
    <artifactId>reactor-netty</artifactId>
    <version>0.9.25.RELEASE</version>
</dependency>

<!-- jackson-core WebClinet로 받은 데이터를 역직렬화하기 위한 도구 -->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-core</artifactId>
    <version>2.13.3</version>
</dependency>

<!-- jackson-databind -->
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <version>2.13.3</version>
</dependency>
```

## Observer pattern

- `Publisher(Provider)`
  `Flux` `Mono`
- `Subscriber(Consumer)` // Publisher에게 데이터를 받을 객체
- `Subscription(Message)` // Publisher가 보내는 데이터
- `Processor<T,R> // Publisher이면서 Subscriber T: Processor`가 생산하는 원소타입 `R: Processor`가 소비하는 원소타입

```java
Subscriber<Integer> subscriber = new Subscriber<>() {
			Subscription subscription;

			@Override
			public void onSubscribe(Subscription s) {
				System.out.println("onSubscribe");
				this.subscription = s;
				this.subscription.request(1); // Publisher에게 요청 횟수 long 타입 // Long.MAX_VALUE을 사용하면 계속 요청을 보냄
			}

			@Override
			public void onNext(Integer t) {
				System.out.println(t); // onSubscribe가 성공시 호출되는 메소드
				System.out.println("onNext");
			}

			@Override
			public void onError(Throwable t) {
				System.out.println("onError");
			}

			@Override
			public void onComplete() {
				System.out.println("onComplete");
			}

		};

		Flux<Integer> seq = Flux.just(1,2,3);

		seq.subscribe(sub);
```

## WebClient

```java
WebClient webClient = WebClient.create("https://api.openweathermap.org/data/2.5/weather");

WeatherRoot weather = webClient.get().uri("?lat=37.7278127"
        + "&lon=127.5112565"
        + "&appid=945a820a0cfd85e6354d9c2a9a628ba9")
        .accept(MediaType.APPLICATION_JSON)
        .exchange().flatMap(res -> {
            return res.bodyToMono(WeatherRoot.class);
        }).block();
```
