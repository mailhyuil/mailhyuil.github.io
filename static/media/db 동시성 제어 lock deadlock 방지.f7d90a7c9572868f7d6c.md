# db transaction lock Dead lock (데드 락) 방지

> 두개의 트랜잭션이 서로가 서로의 자원을 사용하려고 대기하고 있을 때 발생
>
> > e.g. 두개의 트랜잭션이 같이 같은 자원에 share lock을 걸고 데이터를 읽은 후 데이터를 update 하려고 하면 서로가 쓰기가 차단하기 때문에 데드락이 발생한다.

## 데드락 발생 조건

> 비관적 Lock 사용할 때 발생 가능성이 있다.
>
> > Repeatable Read나 Serializable 같은 높은 격리 수준에서는 데이터 읽기 및 쓰기 동작에 대해 잠금을 사용하기 때문에 deadlock이 발생할 수 있다.

```txt
# 상호배제 (Mutual Exclusion)
한번에 한개의 프로세스만 자원을 사용할 수 있어야 한다.

# 점유와 대기 (Hold and Wait)
프로세스가 한개의 자원을 점유하고 있고 추가적으로 다른 프로세스의 자원을 점유하기 위해서는 대기해야한다.

# 비선점 (Non-preemption)
점유된 자원은 강제로 해제될 수 없고, 프로세스가 자원의 사용을 자발적을 해제하기 전까지 그 자원은 얻을 수 없다.

# 환형 대기 (Circular Wait)
자원과 자원을 사용하기 위해 대기하는 프로세스들이 원형으로 구성되어 있어 자신에게 할당된 자원을 점유하면서 앞이나 뒤에 있는 프로세스의 자원을 요구해야 한다.
```

## 방지법

```txt
FOR SHARE FOR SHARE problem : 두개의 트랜잭션이 같이 같은 자원에 share lock을 걸고 데이터를 읽은 후 데이터를 update 하려고 하면 서로가 쓰기가 차단하기 때문에 데드락이 발생한다.
(FOR UPDATE를 사용하면 해결 가능)

FOR UPDATE FOR UPDATE problem : 두개의 트랜잭션이 각각 자원에 exclusive lock을 걸고 서로의 값을 읽거나 쓰려고 할 때 발생
```
