# shellscript deploy with rollback

```sh
#!/bin/bash

BACKUP_DIR=/media/sdc/apps/signage/backup
SERVER_DIR=/media/sdc/apps/signage/server

rollback() {
  echo "Rollback.."

  # 롤백 작업 수행
  rm -rf $SERVER_DIR
  mkdir -p $SERVER_DIR
  cp -r "$BACKUP_DIR"/* $SERVER_DIR

  echo "Rollback completed."
  exit 1
}

trap rollback EXIT

# backup
cp -r $SERVER_DIR/* $BACKUP_DIR

# build & deploy
nx build server --configuration production --skip-nx-cache
rm -rf $SERVER_DIR
mkdir -p $SERVER_DIR
mkdir -p $SERVER_DIR/prisma
cp -r dist/apps/server/* $SERVER_DIR
cp -r prisma/* $SERVER_DIR/prisma
cp ecosystem.config.js $SERVER_DIR/ecosystem.config.js
cp apps/server/.env.production $SERVER_DIR/.env
cd /media/sdc/apps/signage/server
npm install --force
npx prisma migrate deploy
npx prisma generate
pm2 restart ecosystem.config.js --update-env

# 성공 시에는 롤백 함수 등록 해제
trap - EXIT
echo "Deployment completed successfully."
exit 0
```
