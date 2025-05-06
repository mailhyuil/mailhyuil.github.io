# git pull config

> 그냥 pull을 할 경우 merge FETCH_HEAD를 사용하는데
>
> > 이때 fast-forward가 가능하면 fast-forward로 merge를 하게 된다.

```sh
# --ff-only 옵션을 기본으로 사용하도록 설정
git config --global pull.ff only
```
