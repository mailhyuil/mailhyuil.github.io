# spring AOP

> Aspected Oriented Programming 관점 지향 프로그래밍
>
> > 부가기능을 분리
> >
> > > 비즈니스 논리에 집중할 수 있도록 다른 코드를 분리하는 것
> > >
> > > > 프록시 패턴, 데코레이터 패턴 사용

## 용어

### JoinPoint : 코드가 들어갈 위치

> 메소드가 호출되는 부분 또는 리턴되는 부분
>
> > 인스턴스가 만들어지는 지점
> >
> > > 예외가 던져지는 지점
> > >
> > > > 클래스가 초기화 되는 곳(별도의 init메소드가 호출될때)

### Pointcut : 특정 Joinpoint를 골라내는 코드를 담은 오브젝트 // 메소드 선정 알고리즘을 담은 오브젝트

### Advice : 각 Joinpoint에 삽입되어 동작할 코드를 담은 오브젝트

```txt
1. Before Advice : Joinpoint 전에 실행
2. Around Advice : Joinpoint 앞과 뒤에서 실행
3. After Returning Advice : Joinpoint 메소드가 리턴될시 실행. Return된 object에 접근가능
4. After Advice : Joinpoint후에 무조건 실행됨(예외발생시에도 실행. finally와 유사함.)
5. After Throwing Advice : Jointpoint 메소드 실행중 예외발생시 실행
```

### Adviser : Pointcut + Advice // 어드바이스와 포인트컷을 묶은 오브젝트

### Weaving : Pointcut에 의해서 결정된 Joinpoint에 지정된 Advice 를 삽입하는 과정

```txt
1. 컴파일시에 Weaving하기
2. 클래스 로딩 시에 Weaving하기
3. 런타임시에 Weaving하기
```

## 동작원리

> UserService -> UserServiceTx -> UserServiceImpl

```java
@Service
public class UserServiceTx implements UserService{ // 프록시 객체
    UserService userService; // <- UserServiceImpl 주입
    PlatformTransactionManager transactionManager;

    public void doAOP(){
        //transaction logic

        /* business logic */

        //transaction logic
    }
}
```

```java
@Controller
public class Controller{
    UserService userService; // <- UserServiceTx 프록시 객체 주입
}
```

## 다이내믹 프록시

> API를 이용해 프록시처럼 동작하는 오브젝트를 다이내믹하게 생성하는 것
>
> > InvocationHandler 인터페이스 or FactoryBean 구현하여 사용

```java
public class TransactionHandler implements InvocationHandler {
  private Object target;
  private PlatformTransactionManager platformTransactionManager;
  private String pattern;

  /*
  요청을 위임할 타깃을 DI로 제공 받도록 함.
  어떠한 타깃 오브젝트 에도 적용 할 수 있다.
   */
  public void setTarget(Object target) {
    this.target = target;
  }

  public void setPlatformTransactionManager(PlatformTransactionManager platformTransactionManager) {
    this.platformTransactionManager = platformTransactionManager;
  }

  /*
  모든 메소드에 적용되지 않도록 패턴을 DI 받는다.
  "get" 으로 주면 get으로 시작하는 모든 메소드에 트랜잭션 적용
   */
  public void setPattern(String pattern) {
    this.pattern = pattern;
  }

  @Override
  public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
    if (method.getName().startsWith(pattern)) { // 패턴에 맞는 메소드 인지 확인
      return invokeInTransaction(method, args); // 패턴과 일치하면 호출
    } else {
      return method.invoke(target, args); // 아니라면 부가기능 없이 호출
    }
  }

  private Object invokeInTransaction(Method method, Object[] args) throws Throwable {
    TransactionStatus status = this.platformTransactionManager.getTransaction(new DefaultTransactionDefinition());
    try {
      Object ret = method.invoke(target, args);
      this.platformTransactionManager.commit(status);
      return ret;
    } catch (InvocationTargetException e) {
      this.platformTransactionManager.rollback(status);
      throw e.getTargetException();
    }
  }
}
```
