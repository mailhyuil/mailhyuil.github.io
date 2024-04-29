# linux 링크파일 link ln

> hard link 는 원본과 같은 i-node를 갖고있다.
>
> > soft link는 다른 i-node 갖고있다. 그 i-node는 원본 i-node를 참조한다.

```sh
# 하드링크
# ln test.exe test-hard.exe
ln file ubuntu/file

# 소프트 링크 / 심볼릭 링크 / 심링크
# ln -s test.exe text-sym.exe
ln -s file ubuntu/file
```
