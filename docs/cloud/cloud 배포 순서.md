# 배포

1. .env 나누기 local, development, production NODE_ENV 지정
2. .env SERVER 설정
3. 서버에 clone
4. build
5. ecosystem local, development, production NODE_ENV 지정
6. ecosystem.config.js NOTRO_PORT 정해주기 // notion에 안 물려있는 포트 확인
7. pm2 start ecosystem.config.js
8. nginx available 폴더에 config 파일 생성
9. nginx enabled 폴더에 심볼릭 링크 생성 // sudo ln samil.lepisode.team /etc/nginx/sites-enabled/samil.lepisode.team
10. sudo service nginx restart

## shell script

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
