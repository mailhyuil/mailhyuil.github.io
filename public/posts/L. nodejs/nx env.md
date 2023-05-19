# nx env

> NX\_ prefix 붙이기

## 읽는 순위

```
1 apps/my-app/.env.[target-name].[configuration-name]
2 apps/my-app/.[target-name].[configuration-name].env
3 apps/my-app/.env.[target-name]
4 apps/my-app/.[target-name].env
5 apps/my-app/.env.local
6 apps/my-app/.local.env
7 apps/my-app/.env
8 .env.[target-name].[configuration-name]
9 .[target-name].[configuration-name].env
10 .env.[target-name]
11 .[target-name].env
12 .local.env
13 .env.local
14 .env
```

## .env.local

```
SERVER_PORT=3000

# CLIENT
NX_API_ENDPOINT=http://localhost:3000/api/v1
NX_IMAGE_SERVER_URL=https://image.lepisode.team/api/upload.php
NX_FILE_SERVER_URL=https://files.lepisode.team
NX_FILE_SERVER_TOKEN=73532F8CBC421AD7B7EE43A2DE1C7
NX_DISCORD_URL=https://discord.com/api/webhooks/1042266869769441341/GKK0-TI8jlw1k9aZ-G6pZHN4gddCigwmmzk-1hUyBXd0fCgbyB-MI2kdz8u-XO4hmo5A

DATABASE_URL="postgresql://postgres:88782314p*@59.3.87.92:5432/wings-v2?schema=public"

# JWT KEY
JWT_SECRET_KEY=5BTENutJCTpGO2aHfDDs2u0KKKKpKV8s
JWT_PUBLIC_KEY=Xv26XN6L86kGOvHMS2rfV2k9HsLVEEEp
JWT_PRIVATE_KEY=PAwXjs5j7eLj8WIeczIRgZN2TdJqi2Bn

# ADMIN
ADMIN_USERNAME=admin
ADMIN_REALNAME=admin
ADMIN_PASSWORD=admin
ADMIN_PHONE=01011111111
ADMIN_ROLE=MASTER
```
