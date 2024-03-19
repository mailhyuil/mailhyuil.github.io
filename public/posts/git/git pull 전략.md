# git pull 전략

## default

> git merge FETCH_HEAD 와 같이 동작
>
> > 즉, pull 을 받을 때 마다 불필요한 merge commit 이 생기게 되는 것

```sh
git pull
```

## --ff-only

> fast-forwarded 가 새로운 commit 이 발생하지 않고 실행된다
>
> > pull 을 받고자하는 branch 와 현재 branch 가 fast-forward 관계가 아니라면 다음과 같은 오류가 발생

```sh
git pull --ff-only
```

## --rebase

> history 가 정리가 된다는 장점이 있지만,
>
> > rebase 같은 경우 잘 알지 못하고 사용하게 되면, 별도의 알림 없이 영구적으로 history 를 임의로 변경시키기 때문에 주의가 필요

```sh
git pull --rebase
```

## --no-rebase

> config에 pull.rebase 가 true로 세팅되어있다면
>
> > git pull의 default 는 rebase가 된다
> >
> > > 이때 --no-rebase를 통해 rebase가 아닌 상태로 pull 받을 수 있다.

```sh
git pull --no-rebase
```
