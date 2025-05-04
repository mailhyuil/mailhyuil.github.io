# linux network namespace

> container 내부와 host에서 다른 PID를 가지고 있는 같은 프로세스
>
> > e.g. container 내부에서는 1번 PID를 가지고 있지만 host에서는 3816번 PID를 가지고 있다.
> >
> > > 이 원리를 이용하여 프로세스를 격리한다. (같은 네임스페이스와 호스트에서는 접근할 수 있지만 다른 네트워크 네임스페이스에서는 접근할 수 없다.)

```sh
# on container
root 1
root 2
# on host
root 3816
root 3817
```

## create network namespace

```sh
ip netns add <namespace>
ip netns delete <namespace>
ip netns list

ip netns exec <namespace> <command> # namespace에서 실행할 명령어 e.g. ip netns exec <namespace> bash
ip -n <namespace> <command> # 위와 동일한 명령어
```
