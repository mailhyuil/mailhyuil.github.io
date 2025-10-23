# shellscript deploy with rollback

```sh
#!/bin/bash

BACKUP_DIR=/app/backup
SERVER_DIR=/app/server

rollback() {
  echo "Deploy failed, Start rollback..."

  # 롤백 작업 수행
  rm -rf $SERVER_DIR
  cp -r $BACKUP_DIR $SERVER_DIR

  echo "Rollback completed."
  exit 1
}

trap rollback EXIT

# backup
cp -r $SERVER_DIR $BACKUP_DIR

# build
nx build server
echo "Build completed."

# file copy
rm -rf $SERVER_DIR
cp -r dist/apps/server $SERVER_DIR
cp -r prisma $SERVER_DIR/prisma
cp apps/server/.env.production $SERVER_DIR/.env
cp ecosystem.config.js $SERVER_DIR/ecosystem.config.js
cd $SERVER_DIR
echo "File copy completed."

# deploy
npm install
npx prisma migrate deploy
pm2 reload ecosystem.config.js --update-env

# 성공 시에는 롤백 함수 등록 해제
trap - EXIT
echo "Deployment completed successfully."
exit 0
```
