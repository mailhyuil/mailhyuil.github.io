# deploy-deploy

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

# deploy2

> shell script 사용

```shell
#!/bin/bash
PEM_PATH=./scripts/lepisode.pem # .pem 시크릿 키 위치
if [ ! -f $PEM_PATH ]; then # .pem 시크릿 키가 없으면 에러
    echo "[ERROR] PRIVATE KEY FILE NOT FOUND \"$PEM_PATH\""
    exit 1;
fi

# ng build --configuration production

BUILD=$? # build하기
if [ $BUILD -eq 1 ]; then # build 실패시 에러
    echo -e '\n======================================\n'
    echo '[ERROR] BUILD FAILED'
    echo -e '\n======================================\n'
    exit 1;
fi

USER=lepisode # 서버 유저네임
HOST=192.168.0.23 # 서버 주소
DEPLOY_PATH=/opt/smart-solution # 서버 deploy path

SERVER=$USER@$HOST # 유저네임@서버주소
REMOTE_PATH=$SERVER:$DEPLOY_PATH # 유저네임@서버주소:/deployPath

# ssh -oStrictHostKeyChecking=no -i $PEM_PATH $SERVER "rm -rf $DEPLOY_PATH/dist"
ssh -i $PEM_PATH $SERVER "rm -rf $DEPLOY_PATH/www" # ssh로 www 폴더 지우기
ssh -i $PEM_PATH $SERVER "mkdir $DEPLOY_PATH/www" # ssh로 www 폴더 재생성

# for window
scp -i $PEM_PATH -r www $REMOTE_PATH # scp로 www 폴더에 파일 넣기

echo -e '\n======================================\n'
echo 'FILE UPLOAD DONE.'
echo -e '\n======================================\n'
```
