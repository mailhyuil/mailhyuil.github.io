# nx prisma
## package.json
```
"scripts": {
   "migrate:dev": "dotenv -e ./apps/server/.env.serve.development -- npx prisma migrate dev --schema=./apps/server/prisma/schema.prisma"
},
```