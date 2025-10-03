# rust thread

> 기본적으로 main thread가 끝나면 다른 thread 작업도 끝난다.

## thread 생성

> spawn(알을 낳다) 메소드 사용

```rs
use std::thread;

thread::spawn()
```

## join()

> spawn() 메소드가 반환한 값(JoinHandle)의 메소드
>
> > spawned thread의 작업을 join 시킨다.
> >
> > > join을 호출하면 spawned 스레드가 종료될 때까지 현재 실행중인 스레드를 블록합니다.
> > >
> > > > 스레드를 블록 (Block) 한다는 것은 그 스레드의 작업을 수행하거나 종료되는 것이 방지된다는 의미

```rs
let handle = thread::spawn(|| {
    for i in 1..50 {
        println!("hi number {} from the spawned thread!", i);
        thread::sleep(Duration::from_millis(1));
    }
});

handle.join().unwrap(); // join 되는 시점이 main thread 작업보다 위에 있으면 main 작업 실행되기 전에 join이 되기때문에 spawned thread작업이 다 끝난 뒤 main이 시작된다.

for i in 1..50 {
    println!("hi number {} from the main thread!", i);
    thread::sleep(Duration::from_millis(1));
}
```

## 메세지 패싱

> mpsc 모듈 사용
>
> > mpsc (multiple producer, single consumer)
> >
> > > tx (transmitter)
> > >
> > > > rx (receiver)

```rs
use std::thread;
use std::sync::mpsc;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let val = String::from("hi");
        tx.send(val).unwrap();
    });

    let received = rx.recv().unwrap();
    println!("Got: {}", received);
}
```

## 공유

### 뮤텍스

> 상호 배제 (mutual exclusion)의 줄임말
>
> > 데이터를 사용하기 전에 반드시 락을 얻는 시도를 해야 한다.
> >
> > > 뮤텍스가 보호하는 데이터의 사용이 끝났다면, 다른 스레드들이 락을 얻을 수 있도록 반드시 언락해야 한다.
> > >
> > > > Mutex struct 사용
