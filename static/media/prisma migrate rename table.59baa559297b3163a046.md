# prisma migrate rename table

```sh
# schema에서 table 이름 변경 후

prisma migrate dev --create-only # migration.sql 생성

# migration.sql 변경 (table 이름을 바꾸면 알아서 constraint 이름을 바꿔준다)
-- AlterTable
ALTER TABLE "class_qnas" RENAME TO "qnas";
-- AlterTable
-- ALTER TABLE "class_qnas" RENAME CONSTRAINT "class_qnas_pkey" TO "qnas_pkey";
-- AlterTable
-- ALTER TABLE "class_qnas" RENAME CONSTRAINT "class_qnas_class_id_fkey" TO "qnas_class_id_fkey";
-- AlterTable
-- ALTER TABLE "class_qnas" RENAME CONSTRAINT "class_qnas_user_id_fkey" TO "qnas_user_id_fkey";

prisma migrate dev # 적용
```
