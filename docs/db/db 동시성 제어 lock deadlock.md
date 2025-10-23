# db transaction lock Dead lock (데드 락)

> 두 개 이상의 트랜잭션이 서로 상대방의 락을 기다리고 있어 무한 대기 상태에 빠지는 현상
>
> > 데드락을 방지하기 위해서는 트랜잭션을 짧게 유지하고, 트랜잭션을 사용하는 순서를 일정하게 유지하는 것이 중요하다.
> >
> > > timeout을 설정하여 데드락으로 인한 무한 대기를 방지할 수 있다.
> > >
> > > 애초에 deadlock이 발생하지 않도록 설계하는 것이 가장 좋다.

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

# 순환 대기 (Circular Wait)
자원과 자원을 사용하기 위해 대기하는 프로세스들이 원형으로 구성되어 있어 자신에게 할당된 자원을 점유하면서 앞이나 뒤에 있는 프로세스의 자원을 요구해야 한다.
```

## example

```sql
-- transaction 1
begin transaction;
insert into test values(20);
insert into test values(30);

-- transaction 2
begin transaction;
insert into test values(30);
insert into test values(20);

-- deadlock detected
-- deadlock을 먼저 발생시킨 transaction은 rollback 된다.
```
