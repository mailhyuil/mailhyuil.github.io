# docker entrypoint & command

> [entrypoint] [command]
>
> > 인자값을 주고 싶으면 entrypoint에 명령어
> >
> > > 인자값이 필요없으면 command에 넣기

## entrypoint

> 컨테이너가 실행될 때 고정적으로 실행되는 스크립트 혹은 명령어
>
> > 생략 가능, 생략될 경우 커맨드에 지정된 명령어로 수행

## command

> 컨테이너가 실행될 때 수행할 명령어
>
> > 혹은 엔트리포인트에 지정된 명령어에 대한 인자 값

```bash
docker run --entrypoint sh
```

```Dockerfile
ENTRYPOINT ["some-script.sh"]
CMD ["node"]
```
