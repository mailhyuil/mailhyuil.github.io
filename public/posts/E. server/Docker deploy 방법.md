# Docker-deploy

> 서버에 docker 설치
>
> > dockerhub와 연결
> >
> > > 로컬에서 build해서 image를 dockerhub에 push
> > >
> > > > push한 image를 서버에서 pull
> > > >
> > > > > docker run
> > > > >
> > > > > > portainer로 쉽게 관리

## yarn docker

> build 파일을 도커 repository에 푸쉬

```
"docker": "docker image build . -t lepisode/smart-solution-frontend && docker push lepisode/smart-solution-frontend"
```

## portainer

> container recreate
>
> > 그 전에 사용하던 image 삭제
