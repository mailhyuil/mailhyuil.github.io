# linux package xargs

> 한 번에 많은 작업을 일괄로 처리할 수 있게 해주는 응용 소프트웨어
>
> > 작업을 병렬로 처리하는 옵션이 있어서 여러 대에 서버에 매우 큰 파일을 전송하거나
> >
> > > 100GB가 넘는 파일을 각각 압축하는 등의 작업을 동시에 처리할 수 있습니다.

## install

```sh
apt install xargs
```

## usage

```sh
cd example-transformers && ls -d */ | xargs -I {} bash -c "cd '{}' && ttsc"
```
