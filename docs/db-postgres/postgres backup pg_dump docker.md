# postgres backup pg_dump docker

```bash
# sql로 백업
docker run --rm \
  -e PGPASSWORD=1234 \
  -v $(pwd):/backup \
  postgres:17 \
  pg_dump \
    --host=111.111.11.111 \
    --port=5432 \
    --username=postgres \
    --format=plain \
    --data-only \
    --inserts \
    --file=/backup/onepartners-data.sql \
    -t public.banners \
    -t public.rental_options \
    -t public.images \
    -t "public.\"_CarToCarTypeEnum\"" \
    -t "public.\"CarTrimEnum\"" \
    -t public.brands \
    -t "public.\"_prisma_migrations\"" \
    -t public.block_ips \
    -t "public.\"CarTypeEnum\"" \
    -t public.cars \
    -t public.inquiries \
    -t public.attachments \
    -t public.reviews \
    -t public.authentications \
    onepartners
```
