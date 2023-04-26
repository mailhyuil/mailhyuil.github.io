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
