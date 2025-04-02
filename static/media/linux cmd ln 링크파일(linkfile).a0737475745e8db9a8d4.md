# linux cmd ln 링크파일(link file)

> window에서 테스트하면 안됨 (윈도우는 링크파일을 다르게 처리함)
>
> > 둘 다 하나의 파일을 변경하면 다른 파일도 변경된다.
> >
> > 둘 다 디스크 공간을 절약할 수 있다. (똑같은 파일을 여러 곳에서 사용할 때 효과적)

## 소프트링크 (심볼릭링크)

> 원본파일을 바라보는 또 다른 파일을 생성한다. (다른 inode가 있고 그 inode가 원본 inode를 참조)

```sh
# 소프트 링크 / 심볼릭 링크 / 심링크
# ln -s test.exe text-sym.exe
ln -s file ubuntu/file
```

### 소프트링크 주의사항

> soft link 시에는 반드시 절대경로를 사용해야한다. (Too many levels of symbolic links 에러 발생)
>
> > 상대경로를 사용하려면 -r 옵션을 사용 (--relative)

```sh
ln -s ./default ../sites-enabled/default # error

ln -s $PWD/default ../sites-enabled/default # ok
ln -s -r ./default ../sites-enabled/default # ok
```

## 하드링크

> 잘 사용하지 않는다.
>
> > 원본과 같은 inode를 바라보는 파일을 생성한다.
> >
> > > 원본 파일을 삭제해도 다른 파일에는 영향을 주지 않는다. (모든 하드링크가 다 삭제되어야 inode가 삭제된다.)
> > >
> > > 소프트링크와 다르게 무엇이 원본 파일인지 걱정할 필요가 없다.

```sh
# 하드링크
# ln test.exe test-hard.exe
ln file ubuntu/file
```
