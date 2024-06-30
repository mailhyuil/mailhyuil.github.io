# linux 링크파일 link ln

> hardlink는 원본과 같은 inode를 바라보는 파일
>
> 둘중 하나의 모드를 변경해도 둘다 적용
>
> > softlink는 단순히 파일을 바라보는 파일 (다른 inode가 있고 그 inode가 원본 inode를 참조)
> >
> > softlink를 변경해도 원본파일에만 적용됨

```sh
# 하드링크
# ln test.exe test-hard.exe
ln file ubuntu/file

# 소프트 링크 / 심볼릭 링크 / 심링크
# ln -s test.exe text-sym.exe
ln -s file ubuntu/file
```

## softlink 주의사항

> soft link 시에는 반드시 절대경로를 사용해야한다. (Too many levels of symbolic links 에러 발생)
>
> > 상대경로를 사용하려면 -r 옵션을 사용 (--relative)

```sh
ln -s ./default ../sites-enabled/default # error

ln -s $PWD/default ../sites-enabled/default # ok
ln -s -r ./default ../sites-enabled/default # ok
```
